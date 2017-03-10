import types from '../constants/ActionTypes';

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

export default {addMemo, editMemo, deleteMemo}