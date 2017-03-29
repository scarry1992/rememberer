import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as ActionCreators from '../actions'
import { bindActionCreators } from 'redux'
import ShownTypes from '../constants/ShownTypes'
import pickBy from 'lodash/pickBy'
import MemoList from '../components/memo/MemoList'

// class MemosListContainer extends Component {
//
//     static get propTypes() {
//         return {
//             memosById: PropTypes.object.isRequired
//         };
//     }
//
//     render() {
//         const { memosById:memos, dispatch } = this.props,
//             memoActions = bindActionCreators(ActionCreators.memosActions, dispatch);
//
//         return (
//             <div>
//                 <MemoList memos={memos}/>
//             </div>
//         );
//     }
// }

function getVisibleMemosHelper(memos, shownType) {
    switch (shownType) {
        case ShownTypes.NOT_COMPLETED: {
            return pickBy(memos, memo => !memo.complete);
        }
        case ShownTypes.COMPLETED: {
            return pickBy(memos, memo => memo.complete);
        }
        default: {
            return memos
        }
    }
}

const getMemosByUser = (memos, ownerId) => {
    return pickBy(memos, memo => memo.owner == ownerId);
};

const mapStateToProps = (state) => ({
    memos: getMemosByUser(getVisibleMemosHelper(state.entities.memos, state.shownType), state.usersById.activeUser)
    //memos: state.entities.memos
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(ActionCreators.memosActions, dispatch)
});

const MemoListContainer = connect(mapStateToProps, mapDispatchToProps)(MemoList);

export { MemoListContainer }