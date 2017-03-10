import types from '../constants/ActionTypes'
import shownTypes from '../constants/ShownTypes'

export const shownType = (state = shownTypes.NOT_COMPLETED, action) => {
    switch (action.type) {
        case types.CHANGE_SHOWN_TYPE: {
            return action.payload.shownType;
        }
    }
};