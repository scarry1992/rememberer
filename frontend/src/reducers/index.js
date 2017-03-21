import { combineReducers } from 'redux';
import { memos } from './memos'
import { shownType } from './shownType'
import { isFetching } from './isFetching'
import { serverInfo } from './serverInfo'

export const reducer = combineReducers({
    shownType,
    isFetching,
    serverInfo,
    memos
});