import types from '../../../constants/ActionTypes'
import omit from 'lodash/omit'
import pickBy from 'lodash/pickBy'
import merge from 'lodash/merge'

export const memos = (state = {}, action) => {
    switch (action.type) {
        case types.ADD_MEMO: {
            let keys = Object.keys(state),
                newId = ++keys[keys.length - 1];

            return Object.assign({}, state, {
                [newId]: {
                    id: newId,
                    create: Date.now(),
                    text: action.payload.text,
                    complete: false
                }
            })
        }
        case types.EDIT_MEMO: {
            return merge({}, state, {
                [action.payload.id]: {
                    modify: Date.now(),
                    text: action.payload.text
                }
            })
        }
        case types.DELETE_MEMO: {
            return omit(state, action.payload.id)
        }
        case types.TOGGLE_TYPE: {
            return Object.assign({}, state, {
                [action.payload.id]: Object.assign({}, state[action.payload.id], {
                    modify: Date.now(),
                    complete: state[action.payload.id].complete?false:Date.now()
                })
            })
        }
        case types.RECEIVE_MEMOS: {
            switch (action.subtype) {
                case 'update': {
                    const isNewer = (memo, key) => {
                        let isExistClientMemo = !!state[key],
                            modifyTimeClient = isExistClientMemo?state[key].modify:false,
                            modifyTimeServer = memo.modify,
                            isNewerMemo = !isExistClientMemo ||
                                ((!!modifyTimeClient && !!modifyTimeServer && +modifyTimeServer > +modifyTimeClient) ||
                                (!!modifyTimeServer && !modifyTimeClient));

                        return isNewerMemo;
                    };

                    return Object.assign({}, state, pickBy(action.payload.memos, isNewer));
                }
                case 'change_user': {
                    return action.payload.memos;
                }
                default: {
                    return state;
                }
            }
        }
        case types.RECEIVE_ERROR_MEMOS: {
            console.log(action.payload.error.message);

            return state;
        }
        case types.CHANGE_USER: {
            let memos = {};

            action.payload.memosByUser.forEach(memo => {memos[memo.id] = memo});

            return memos;
        }
        default: {
            return state;
        }
    }
};