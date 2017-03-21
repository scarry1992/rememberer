import types from '../constants/ActionTypes'
import {fetchSuccessHelper} from '../helpers/fetchSuccessHelper'

const serverInfo = (state = {}, action) => {
    switch (action.type) {
        case types.FETCH_SUCCESS: {
            return fetchSuccessHelper(state, action)
        }
        case types.FETCH_ERROR: {
            console.log(action.payload.error.message);

            return state
        }
        default: {
            return state
        }
    }
};

export { serverInfo }