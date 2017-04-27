import shownTypes from '../constants/ShownTypes';

export const initialState = {
    shownType: shownTypes.NOT_COMPLETED,
    entities: {
        memos: {
            1: {
                id:1,
                create: 1490103220671,
                text: 'MemoTestNotComplited',
                complete: false
            },
            2: {
                id:2,
                create: Date.now(),
                text: 'MemoTestComplited',
                complete: Date.now() + 10000
            }
        },
        users: {
            1: {
                id: 1,
                nickname: 'Self',
                firstName: 'NoName',
                surName: 'NoSurName'
            }
        }
    },
    memosById: {
        isFetching: false,
        didInvalidate: false,
        lastTimeUpdate: 1490105220671,
        memos: [1,2]
    },
    usersById: {
        isFetching: false,
        didInvalidate: true,
        lastTimeUpdate: 1490105220671,
        activeUser: 1
    }
};