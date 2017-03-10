import types from '../constants/ActionTypes';
import omit from 'lodash/omit';
import { combineReducers } from 'redux'

const memosIds = (state = [], action) => {
    switch (action.type) {
        case types.ADD_MEMO: {
            let newId = state[state.length - 1] + 1;

            return [...state, newId]
        }
        case types.DELETE_MEMO: {
            return state.filter(id => id !== action.payload.id)
        }
        case types.EDIT_MEMO:
        default: {
            return state;
        }
    }
};

const memosById = (state = {}, action) => {
    switch (action.type) {
        case types.ADD_MEMO: {
            let keys = Object.keys(state),
                newId = ++keys[keys.length - 1];

            return Object.assign({}, state, {
                [newId]: {
                    create: Date.now(),
                    text: action.payload.text,
                    complete: false
                }
            })
        }
        case types.EDIT_MEMO: {
            return Object.assign({}, state, {
                [action.payload.id]: {
                    create: Date.now(),
                    text: action.payload.text,
                    complete: state[action.payload.id].complete
                }
            })
        }
        case types.DELETE_MEMO: {
            return omit(state, action.payload.id)
        }
        default: {
            return state;
        }
    }
};

export const memos = combineReducers({
    memosIds,
    memosById
});