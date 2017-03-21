import types from '../constants/ActionTypes'

const isFetching = (state = false, action) => {
    switch (action.type) {
        case types.FETCH_REQUEST: {
            return {
                isFetching: action.isFetching
            }
        }
        case types.FETCH_SUCCESS: {
            return {
                isFetching: action.isFetching
            }
        }
        case types.FETCH_ERROR: {
            return {
                isFetching: action.isFetching
            }
        }
        default: {
            return state
        }
    }
};

export { isFetching }