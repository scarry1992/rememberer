import shownTypes from '../constants/ShownTypes';
import { combineReducers } from 'redux';
import { memos } from './memos'
import { shownType } from './shownType'

const initialState = {
    shownType: shownTypes.NOT_COMPLETED,
    memos: {
        memosIds: [1,2],
        memosById: {
            1: {
                create: new Date.now(),
                text: 'Get money!',
                complete: false
            },
            2: {
                create: new Date.now(),
                text: 'Get money!',
                complete: new Date.now() + 10000
            }
        }
    }
};

//TODO придумать как прокинуть редьюсер отсюда

export const reducer = (state = initialState, action) => {
    return {

    }
};