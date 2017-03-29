import types from '../../../constants/ActionTypes'
import merge from 'lodash/merge'

export const users = (state ={}, action) => {
    switch (action.type) {
        case types.EDIT_USER: {
            return merge({}, state, {
                [action.payload.id]: {
                    nickname: action.payload.data.nickname ?
                        action.payload.data.nickname : state[action.payload.id].nickname,
                    firstName: action.payload.data.firstName ?
                        action.payload.data.firstName : state[action.payload.id].firstName,
                    surName: action.payload.data.surName ?
                        action.payload.data.surName : state[action.payload.id].surName,
                }
            })
        }
        case types.RECEIVE_USER: {
            return {
                [action.payload.user.id]: action.payload.user
            };
        }
        case types.RECEIVE_ERROR_USER: {
            console.log(action.payload.error.message);

            return state;
        }
        default: {
            return state;
        }
    }
};