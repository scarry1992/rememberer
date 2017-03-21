import types from '../constants/ActionTypes'

const isFetching = (state = false, action) => {
    switch (action.type) {
        case types.FETCH_REQUEST: {
            return action.payload.isFetching;
        }
        case types.FETCH_SUCCESS: {
            return action.payload.isFetching;
        }
        case types.FETCH_ERROR: {
            console.log(action.error.message);

            return action.payload.isFetching;
        }
        default: {
            return state
        }
    }
};

export { isFetching }