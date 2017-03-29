import types from '../constants/ActionTypes'
import memosActions from './memosActions'

// const changeUser = (data) => ({
//     type: types.CHANGE_USER,
//     payload: {
//         data
//     }
// });

const editUser = (id, data) => ({
    type: types.EDIT_USER,
    payload: {
        id,
        data
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

const fetchUser = (data) => (dispatch) => {
    if (!data) {
        return dispatch(receiveErrorUser(false, new Error('Invalid User ID')));
    }

    dispatch(requestUser(true));

    return fetch('/assets/users.json').
    then(resp => resp.json()).
    then(json => dispatch(receiveUser(false, json))).
    catch(err => dispatch(receiveErrorUser(false, err)));
};

const changeUser = data => dispatch => {
    let memosByUser, user;

    return dispatch(fetchUser(data)).then(userActionData => {
        user = userActionData.payload.user;

        return dispatch(memosActions.fetchMemos(userActionData.payload.user.id, 'change_user'))
    }).then(memosActionData => {
        memosByUser = memosActionData.payload.memos;

        return {
            type: types.CHANGE_USER,
            payload: {
                user,
                memosByUser
            }
        }
    }).catch(err => {
        console.log(err.message);
    });
};


export default {
    changeUser,
    editUser,
    requestUser,
    receiveUser,
    receiveErrorUser,
    fetchUser,
    toggleValidateUsers
}