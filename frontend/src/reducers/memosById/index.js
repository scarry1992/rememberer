import types from '../../constants/ActionTypes';
import union from 'lodash/union'

export const memosById = (state = {}, action) => {
    switch (action.type) {
        case types.ADD_MEMO: {
            let newId = state.memos[state.memos.length - 1] + 1;

            return Object.assign({}, state, {memos: [...state.memos, newId]})
        }
        case types.DELETE_MEMO: {
            return Object.assign({}, state, {memos: state.memos.filter(id => id !== action.payload.id)})
        }
        case types.TOGGLE_VALIDATE_MEMOS: {
            return Object.assign({}, state, {
                lastTimeUpdate: Date.now(),
                didInvalidate: !state.didInvalidate
            })
        }
        case types.REQUEST_MEMOS: {
            return Object.assign({}, state, {
                isFetching: action.payload.isFetching
            })
        }
        case types.RECEIVE_MEMOS: {
            let keys = Object.keys(action.payload.memos).map(key => +key);

            return Object.assign({}, state, {
                isFetching: action.payload.isFetching,
                memos: union(state.memos, keys).sort()
            })
        }
        default: {
            return state;
        }
    }
};