import React, { Component, PropTypes } from 'react'
import MemoItem from './MemoItem'
import map from 'lodash/map'

export default class MemoList extends Component {
    static get propTypes() {
        return {
            memos: PropTypes.object.isRequired
        }
    }

    render() {
        return (
            <div>
                {
                    map(this.props.memos, (memo, index) => <MemoItem key={index} memo={memo}/>)
                }
            </div>
        );
    }
}


