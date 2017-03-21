import React, { Component, PropTypes } from 'react'
import MemoItem from './MemoItem'
import map from 'lodash/map'

export default class MemoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            create: false,
            text: ''
        };
    }

    static get propTypes() {
        return {
            memos: PropTypes.object.isRequired
        }
    }

    createClickHandler() {
        this.setState({
            create: true
        });
    }

    changeTextHandler(e) {
        this.setState({
            text: e.target.value
        });
    }

    saveHandler(e) {
        this.props.actions.addMemo(this.state.text);
        this.setState({
            create: false,
            text: ''
        });
    }

    render() {
        return (
            <div>
                {
                    map(this.props.memos, (memo, index) => <MemoItem key={index} memo={memo} actions={this.props.actions}/>)
                }

                <button onClick={this.createClickHandler.bind(this)}>Create</button>
                {this.state.create? <input onChange={this.changeTextHandler.bind(this)} type="text" value={this.state.text}/>: ''}
                {this.state.create?<button onClick={this.saveHandler.bind(this)}>Save</button>:''}
            </div>
        );
    }
}


