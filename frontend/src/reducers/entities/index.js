import { combineReducers } from 'redux'
import { memos } from './memos'
import  { users } from './users'

export const entities = combineReducers({
    memos,
    users
});