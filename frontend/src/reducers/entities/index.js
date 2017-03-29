import { combineReducers } from 'redux'
import { memos } from './memos'
import  { users } from './users'

// export const entities = combineReducers({
//     memos,
//     users
// });

export const entities = (state, action, owner) => ({
    memos: memos(state.memos, action, owner),
    users: users(state.users, action)
});