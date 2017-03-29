import types from '../../constants/ActionTypes'

export const usersById = (state = {}, action) => {
    switch (action.type) {
        case types.REQUEST_USER: {
            return Object.assign({}, state, {isFetching: action.payload.isFetching})
        }
        case types.RECEIVE_USER: {
            return Object.assign({}, state, {
                isFetching: action.payload.isFetching,
                activeUser: action.payload.user.id
            })
        }
        case types.TOGGLE_VALIDATE_USERS: {
            return Object.assign({}, state, {
                lastTimeUpdate: Date.now(),
                didInvalidate: !state.didInvalidate
            })
        }
        default: {
            return state;
        }
    }
};