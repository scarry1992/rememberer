import types from '../constants/ActionTypes'

const fetchRequest = (entity, isFetching) => ({
    type: types.FETCH_REQUEST,
    payload: {isFetching, entity}
});

const fetchSuccess = (entity, isFetching, data) => ({
    type: types.FETCH_SUCCESS,
    payload: {data, isFetching, entity}
});

const fetchError = (entity, isFetching, error) => ({
    type: types.FETCH_ERROR,
    payload: {isFetching, error, entity}
});

export {
    fetchRequest,
    fetchSuccess,
    fetchError
}