import types from '../../../constants/ActionTypes';
import omit from 'lodash/omit';
import { combineReducers } from 'redux'
//import {fetchSuccessHelper} from '../helpers/fetchSuccessHelper'

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
                    complete: false,
                    //userId:
                }
            })
        }
        case types.EDIT_MEMO: {
            return Object.assign({}, state, {
                [action.payload.id]: {
                    id: state[action.payload.id].id,
                    create: Date.now(),
                    text: action.payload.text,
                    complete: state[action.payload.id].complete
                }
            })
        }
        case types.DELETE_MEMO: {
            return omit(state, action.payload.id)
        }
        case types.TOGGLE_TYPE: {
            return Object.assign({}, state, {
                [action.payload.id]: {
                    id: state[action.payload.id].id,
                    create: state[action.payload.id].create,
                    text: state[action.payload.id].text,
                    complete: state[action.payload.id].complete ?
                        false:
                        Date.now()
                }
            })
        }
        case types.RECEIVE_MEMOS: {
            return fetchSuccessHelper(state, action);////
        }
        case types.RECEIVE_ERROR_MEMOS: {
            console.log(action.payload.error.message);
            return state;
        }
        default: {
            return state;
        }
    }
};