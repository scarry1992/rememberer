import { combineReducers } from 'redux';
import { entities } from './entities'
import { shownType } from './shownType'
import { memosById } from './memosById'
import { usersById } from './usersById'

export const reducer = combineReducers({
    shownType,
    entities,
    memosById,
    usersById
});