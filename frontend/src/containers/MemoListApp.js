import React, { Component } from 'react'
import MemoListContainer from '../components/memo/MemoList'
import ShownTypeTogglerContainer from '../components/shownType/ShownTypeToggler'
import UserContainer from '../components/users/User'
import { connect } from 'react-redux'
import * as ActionCreators from '../actions'
import { bindActionCreators } from 'redux'
import ShownTypes from '../constants/ShownTypes'
import pickBy from 'lodash/pickBy'

class MemoAppContainer extends Component {
    render() {
        return (
            <div>
                <UserContainer
                    user={this.props.entities.users[this.props.usersById.activeUser]}
                    usersById={this.props.usersById}
                    actions={this.props.userActions}
                />
                {this.props.usersById.didInvalidate ?
                    (
                        <span>Please, Login</span>
                    ):(
                        <div>
                            <ShownTypeTogglerContainer
                                shownType={this.props.shownType}
                                onTogglerClick={this.props.shownActions.changeShownType.bind(this)}
                            />
                            <MemoListContainer
                                memos={getVisibleMemosHelper(this.props.entities.memos, this.props.shownType)}
                                actions={this.props.memoActions}
                            />
                        </div>
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    entities: state.entities,
    usersById:state.usersById,
    shownType: state.shownType
});

const mapDispatchToProps = (dispatch) => ({
    memoActions: bindActionCreators(ActionCreators.memosActions, dispatch),
    userActions: bindActionCreators(ActionCreators.usersActions, dispatch),
    shownActions: bindActionCreators(ActionCreators.shownTypeActions, dispatch)
});


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

const MemoListApp = connect(mapStateToProps, mapDispatchToProps)(MemoAppContainer);

export default MemoListApp;