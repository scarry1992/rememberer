import types from '../constants/ActionTypes'

const toggleActiveUser = (id) => ({
    type: types.TOGGLE_ACTIVE_USER,
    payload: {
        id
    }
});

export default { toggleActiveUser }