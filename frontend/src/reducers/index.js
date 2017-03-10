import { combineReducers } from 'redux';
import { memos } from './memos'
import { shownType } from './shownType'

export const reducer = combineReducers({
    shownType,
    memos
});