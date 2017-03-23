import types from '../constants/ActionTypes'

const addMemo = (text) => ({
    type: types.ADD_MEMO,
    payload: {text: text}
});

const editMemo = (id, text) => ({
    type: types.EDIT_MEMO,
    payload: {id: id, text: text}
});

const deleteMemo = (id) => ({
    type: types.DELETE_MEMO,
    payload: {id: id}
});

const toggleType = (id) => ({
    type: types.TOGGLE_TYPE,
    payload: {
        id: id
    }
});

const requestMemos = (userId, isFetching) => ({
    type: types.REQUEST_MEMOS,
    payload: {
        userId,
        isFetching
    }
});

const receiveMemos = (isFetching, memos) => ({
    type: types.RECEIVE_MEMOS,
    payload: {
        isFetching,
        memos
    }
});

const receiveErrorMemos = (isFetching, error) => ({
    type: types.RECEIVE_ERROR_MEMOS,
    payload: {
        isFetching,
        error
    }
});

const toggleValidateMemos = () => ({
    type:types.TOGGLE_VALIDATE_MEMOS
});

const fetchMemos = (userId = 0) => (dispatch) => {
    if (!userId) {
        return dispatch(receiveErrorMemos(false, new Error('Invalid User ID')));
    }

    dispatch(requestMemos(userId, true));

    return fetch('/assets/memos.json').
        then(resp => resp.json()).
        then(json => dispatch(receiveMemos(false, json))).
        catch(err => dispatch(receiveErrorMemos(false, err)));
};

export default {addMemo, editMemo, deleteMemo, toggleType, toggleValidateMemos, fetchMemos}