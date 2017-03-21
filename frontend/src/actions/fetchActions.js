import types from '../constants/ActionTypes'

const fetchRequest = (isFetching) => ({
    type: types.FETCH_REQUEST,
    payload: {isFetching}
});

const fetchSuccess = (isFetching, data) => ({
    type: types.FETCH_SUCCESS,
    payload: {data, isFetching}
});

const fetchError = (isFetching, error) => ({
    type: types.FETCH_ERROR,
    payload: {isFetching, error}
});

export {
    fetchRequest,
    fetchSuccess,
    fetchError
}