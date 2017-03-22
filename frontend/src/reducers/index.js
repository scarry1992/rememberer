// import { combineReducers } from 'redux';
// import { memos } from './entities/memos'
// import { shownType } from './shownType'
//
// export const reducer = combineReducers({
//     shownType,
//     isFetching,
//     serverInfo,
//     memos
// });

import types from '../constants/ActionTypes'
import merge from 'lodash/merge'
import union from 'lodash/union'

export const reducer = (state = {}, action) => {
    switch (action.type) {
        case types.ADD_MEMO: {
            let keys = Object.keys(state.entities.memos),
                newId = ++keys[keys.length - 1];

            return merge(
                {},
                state,
                {
                    shownType: state.shownType,
                    entities: {
                        memos: {
                            [newId]: {
                                id: newId,
                                create: Date.now(),
                                text: action.payload.text,
                                complete: false,
                                userId: state.activeUser
                            }
                        },
                        users: state.entities.users
                    },
                    memosByUserId: {
                        isFetching: false,
                        didInvalidate: true,
                        lastTimeUpdate: Date.now(),
                        memos: [...state.memosByUserId.memos, newId]
                    },
                    activeUser: state.activeUser
                }
            );
        }
        case types.EDIT_MEMO: {
            return {};
        }
        case types.DELETE_MEMO: {
            return {};
        }
        case types.INVALIDATE_MEMOS: {
            return {};
        }
        case types.TOGGLE_TYPE: {
            return {};
        }
        case types.REQUEST_MEMOS: {
            return Object.assign({},
                    state,
                    {memosByUserId: Object.assign({}, state.memosByUserId, {isFetching: action.payload.isFetching})}
                );
        }
        case types.RECEIVE_MEMOS: {
            let keys = Object.keys(action.payload.memos).map(key => +key);

            return merge(
                {},
                state,
                {
                    shownType: state.shownType,
                    entities: {
                        memos: Object.assign({}, state.entities.memos, action.payload.memos),
                        users: state.entities.users
                    },
                    memosByUserId: {
                        isFetching: false,
                        didInvalidate: true,
                        lastTimeUpdate: Date.now(),
                        memos: union(state.memosByUserId.memos, keys)
                    },
                    activeUser: state.activeUser
                }
            );
        }
        default: {
            return state;
        }
    }
};