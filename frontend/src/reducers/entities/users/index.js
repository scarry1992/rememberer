import types from '../../../constants/ActionTypes';

export const users = (state ={}, action) => {
    switch (action.type) {
        case types.ADD_USER: {
            return state;
        }
        case types.EDIT_USER: {
            return state;
        }
        case types.DELETE_USER: {
            return state;
        }
        default: {
            return state;
        }
    }
};