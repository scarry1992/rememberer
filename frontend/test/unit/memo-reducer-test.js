import { describe, it } from 'mocha'
import { expect } from 'chai'
import { memos } from '../../src/reducers/entities/memos'
import MemosActions from '../../src/actions/memosActions'

describe('memos reducer', () => {
    const initialState = {
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
    };

    it('Add MEMO', () => {
        expect(memos(initialState, MemosActions.addMemo('Test'))[3].text).to.equal('Test');
    });
});