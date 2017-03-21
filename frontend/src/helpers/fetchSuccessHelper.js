const fetchSuccessHelper = (state, action) => {
    return Object.assign({}, state[action.payload.entity], action.payload.data)
};

export { fetchSuccessHelper }