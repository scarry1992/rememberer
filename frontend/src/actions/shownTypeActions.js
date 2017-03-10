import types from '../constants/ActionTypes';

const changeShownType = (shownType) => ({
    type: types.CHANGE_SHOWN_TYPE,
    payload: {shownType: shownType}
});

export default {changeShownType}