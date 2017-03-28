import types from '../../../constants/ActionTypes'
import omit from 'lodash/omit'
import merge from 'lodash/merge'

export const users = (state ={}, action) => {
    switch (action.type) {
        case types.ADD_USER: {
            let keys = Object.keys(state),
                newId = ++keys[keys.length - 1];

            return Object.assign({}, state, {
                [newId]: {
                    id: newId,
                    nickname: action.payload.data.nickname,
                    firstName: action.payload.data.firstName,
                    surName: action.payload.data.surName
                }
            })
        }
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
        case types.DELETE_USER: {
            return omit(state, action.payload.id)
        }
        case types.RECEIVE_USER: {
            return Object.assign({}, state, {
                [action.payload.user.id]: action.payload.user
            });
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