import React, { Component } from 'react'
import './AppComponent.pcss'
import MemoListComponent from './memo/MemoList/index'
import ShownTypeTogglerComponent from './shownType/ShownTypeToggler'
import UserComponent from './users/User'
import Footer from './footer'
import ShownTypes from '../constants/ShownTypes'
import pickBy from 'lodash/pickBy'

export default class AppComponent extends Component {
    render() {
        return (
            <div>
                <UserComponent
                    user={this.props.entities.users[this.props.usersById.activeUser]}
                    usersById={this.props.usersById}
                    actions={this.props.userActions}
                />
                {!this.props.usersById.didInvalidate ?
                    (
                        <div>
                            <ShownTypeTogglerComponent
                                shownType={this.props.shownType}
                                onTogglerClick={this.props.shownActions.changeShownType.bind(this)}
                            />
                            <MemoListComponent
                                memos={getVisibleMemosHelper(this.props.entities.memos, this.props.shownType)}
                                actions={this.props.memoActions}
                            />
                        </div>
                    ):
                    undefined
                }
                <Footer/>
            </div>
        );
    }
}

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