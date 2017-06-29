import {describe, it} from 'mocha'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
import {expect} from 'chai'
import MemosActions from '../../src/actions/memosActions'
import * as types from '../../src/constants/MemosActionTypes'

const initialState = {
    1: {
        id: 1,
        create: 1490103220671,
        text: 'MemoTestNotComplited',
        complete: false
    },
    2: {
        id: 2,
        create: 1490104220671,
        text: 'MemoTestComplited',
        complete: 1490153220671
    }
};
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('memos actions', () => {

    it('Add MEMO', () => {
        const store = mockStore(initialState);
        const expectAction = {
            type: types.ADD_MEMO,
            payload: {
                text: "Test"
            }
        };

        expect(store.dispatch(MemosActions.addMemo('Test'))).to.eql(expectAction);
    });

    it('Edit MEMO', () => {
        const store = mockStore(initialState);
        const expectAction = {
            type: types.EDIT_MEMO,
            payload: {
                id: 2,
                text: "TestModify"
            }
        };

        expect(store.dispatch(MemosActions.editMemo(2, 'TestModify'))).to.eql(expectAction);
    });

    it('Delete MEMO', () => {
        const store = mockStore(initialState);
        const expectAction = {
            type: types.DELETE_MEMO,
            payload: {
                id: 2
            }
        };

        expect(store.dispatch(MemosActions.deleteMemo(2))).to.eql(expectAction);
    });

    it('Toogle type MEMO', () => {
        const store = mockStore(initialState);
        const expectAction = {
            type: types.TOGGLE_TYPE,
            payload: {
                id: 2
            }
        };

        expect(store.dispatch(MemosActions.toggleType(2))).to.eql(expectAction);
    });

    it('Toogle validate MEMO', () => {
        const store = mockStore(initialState);
        const expectAction = {
            type: types.TOGGLE_VALIDATE_MEMOS
        };

        expect(store.dispatch(MemosActions.toggleValidateMemos())).to.eql(expectAction);
    });

    it('Featch MEMO Success', () => {
        nock('/')
            .get('/assets/memos.json')
            .reply(200, {
                "1": {
                    "id": 1,
                    "create": 1490103220671,
                    "modify": 1490103290671,
                    "text": "Async MEMO_1",
                    "complete": false
                },
                "7": {
                    "id": 7,
                    "create": 1490105227671,
                    "text": "Async MEMO_2",
                    "complete": 1490135220671
                }
            });

        const store = mockStore(initialState);
        const expectedActions = [
            {
                type: types.REQUEST_MEMOS,
                payload: {isFetching: true}
            },
            {
                type: types.RECEIVE_MEMOS,
                subtype: 'update',
                payload: {
                    isFetching: false,
                    memos: {
                        1: {
                            id: 1,
                            create: 1490103220671,
                            modify: 1490103290671,
                            text: "Async MEMO_1",
                            complete: false
                        },
                        7: {
                            id: 7,
                            create: 1490105227671,
                            text: "Async MEMO_2",
                            complete: 1490135220671
                        }
                    },
                    userId: 5
                }
            }
        ];

        store.dispatch(MemosActions.fetchMemos(5)).then(() => {
            expect(store.getActions()).to.eql(expectedActions)
        })
    });

    it('Featch MEMO Failed', () => {
        nock('/')
            .get('/assets/memos.json')
            .reply(404);

        const store = mockStore(initialState);

        store.dispatch(MemosActions.fetchMemos(5)).then(() => {
            expect(store.getActions()[1].payload.error).to.be.an.instanceOf(Error);
        })
    })
});