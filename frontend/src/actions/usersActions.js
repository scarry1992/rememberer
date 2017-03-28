import types from '../constants/ActionTypes'

const addUser = (data) => ({
    type: types.ADD_USER,
    payload: {
        data
    }
});

const editUser = (id, data) => ({
    type: types.EDIT_USER,
    payload: {
        id,
        data
    }
});

const deleteUser = (id) => ({
    type: types.DELETE_USER,
    payload: {
        id
    }
});

const toggleActiveUser = (id) => ({
    type: types.TOGGLE_ACTIVE_USER,
    payload: {
        id
    }
});

const requestUser = (isFetching) => ({
    type: types.REQUEST_USER,
    payload: {
        isFetching
    }
});

const receiveUser = (isFetching, user) => ({
    type: types.RECEIVE_USER,
    payload: {
        isFetching,
        user
    }
});

const receiveErrorUser = (isFetching, error) => ({
    type: types.RECEIVE_ERROR_USER,
    payload: {
        isFetching,
        error
    }
});

const toggleValidateUsers = () => ({
    type:types.TOGGLE_VALIDATE_USERS
});

const fetchUser = (userId = 0) => (dispatch) => {
    if (!userId) {
        return dispatch(receiveErrorUser(false, new Error('Invalid User ID')));
    }

    dispatch(requestUser(true));

    return fetch('/assets/users.json').
    then(resp => resp.json()).
    then(json => dispatch(receiveUser(false, json))).
    catch(err => dispatch(receiveErrorUser(false, err)));
};


export default {
    addUser,
    editUser,
    deleteUser,
    toggleActiveUser,
    requestUser,
    receiveUser,
    receiveErrorUser,
    fetchUser,
    toggleValidateUsers
}