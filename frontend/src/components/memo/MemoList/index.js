import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MemoItem from '../MemoItem'
import map from 'lodash/map'
import style from './MemoList.pcss'

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

    saveHandler() {
        this.props.actions.addMemo(this.state.text);
        this.setState({
            create: false,
            text: ''
        });
    }

    render() {
        return (
            <div className={style.list}>
                {
                    map(this.props.memos, (memo, index) => <MemoItem key={index} memo={memo} actions={this.props.actions}/>)
                }

                <button className={style['btn-add']} onClick={this.createClickHandler.bind(this)}>+</button>
                {this.state.create? (
                    <div className={style.add}>
                        <div className={style.add__inner}>
                            <textarea onChange={this.changeTextHandler.bind(this)} type="text" value={this.state.text}/>
                            <button onClick={this.saveHandler.bind(this)}>OK</button>
                        </div>
                    </div>
                ):
                    undefined}
            </div>
        );
    }
}


