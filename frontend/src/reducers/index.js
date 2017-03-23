import { combineReducers } from 'redux';
import { entities } from './entities'
import { shownType } from './shownType'
import { memosById } from './memosById'

export const reducer = combineReducers({
    shownType,
    entities,
    memosById
});