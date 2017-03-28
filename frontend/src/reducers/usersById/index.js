import types from '../../constants/ActionTypes'

export const usersById = (state = {}, action) => {
    switch (action.type) {
        case types.ADD_USER: {
            let newId = state.users[state.users.length - 1] + 1;

            return Object.assign({}, state, {users: [...state.users, newId]})
        }
        case types.DELETE_USER: {
            return Object.assign({}, state, {users: state.users.filter(id => id !== action.payload.id)})
        }
        case types.REQUEST_USER: {
            return Object.assign({}, state, {isFetching: action.payload.isFetching})
        }
        case types.RECEIVE_USER: {
            let users = [...state.users, action.payload.user.id].sort();

            return Object.assign({}, state, {
                isFetching: action.payload.isFetching,
                users,
                activeUser: action.payload.user.id
            })
        }
        case types.TOGGLE_VALIDATE_USERS: {
            return Object.assign({}, state, {
                lastTimeUpdate: Date.now(),
                didInvalidate: !state.didInvalidate
            })
        }
        case types.TOGGLE_ACTIVE_USER: {
            return Object.assign({}, state, {activeUser: action.payload.id})
        }
        default: {
            return state;
        }
    }
};