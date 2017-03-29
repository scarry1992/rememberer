import { combineReducers } from 'redux';
import { entities } from './entities'
import { shownType } from './shownType'
import { memosById } from './memosById'
import { usersById } from './usersById'

// export const reducer = combineReducers({
//     shownType,
//     entities,
//     memosById,
//     usersById
// });

export const reducer = (state, action) => ({
    shownType: shownType(state.shownType, action),
    entities: entities(state.entities, action, state.usersById.activeUser),
    memosById: memosById(state.memosById, action),
    usersById: usersById(state.usersById, action)
});