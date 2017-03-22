import types from '../../constants/ActionTypes';
import omit from 'lodash/omit';
import { combineReducers } from 'redux'
//import {fetchSuccessHelper} from '../helpers/fetchSuccessHelper'

const memosByUserId = (state = {}, action) => {
    switch (action.type) {
        case types.ADD_MEMO: {
            let newId = state[state.length - 1] + 1;

            return [...state, newId]
        }
        case types.DELETE_MEMO: {
            return state.filter(id => id !== action.payload.id)
        }
        case types.FETCH_SUCCESS: {

            console.log(state, Object.keys(action.payload.data));
            return [
                ...state,
                ...Object.keys(action.payload.data)
            ];
        }
        case types.FETCH_ERROR: {
            console.log(action.payload.error.message);
            return state;
        }
        default: {
            return state;
        }
    }
};