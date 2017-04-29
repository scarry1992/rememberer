import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './MemoItem.pcss'

export default class MemoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            text: this.props.memo.text
        };
    }

    static get propTypes() {
        return {
            memo: PropTypes.shape({
                id: PropTypes.number.isRequired,
                create: PropTypes.number.isRequired,
                text: PropTypes.string.isRequired,
                complete: PropTypes.oneOfType([
                    PropTypes.bool,
                    PropTypes.number
                ])
            })
        }
    }

    deleteHandler() {
        this.props.actions.deleteMemo(this.props.memo.id)
    }

    editClickHandler() {
        this.setState({
            edit: true
        });
    }

    editTextMemoHandler(e) {
        this.setState({
            text: e.target.value
        });
    }

    saveTextMemoHandler() {
        this.props.actions.editMemo(this.props.memo.id, this.state.text);
        this.setState({
            edit: false
        });
    }

    toggleTypeHandler() {
        this.props.actions.toggleType(this.props.memo.id);
    }

    render() {
        const { create, text, complete, id } = this.props.memo;

        return (
            <div className={style.item} data-id={id}>
                <span className={style.item__create}>{new Date(create).toLocaleDateString()}</span>
                {complete ? <span className={style.item__complite}> - {new Date(complete).toLocaleDateString()}</span> : undefined}
                <button className={style.item__toggle} onClick={this.toggleTypeHandler.bind(this)}>{complete ? 'redo': 'done'}</button>
                <button className={style.item__delete} onClick={this.deleteHandler.bind(this)}>x</button>
                {
                    this.state.edit?
                        <textarea  className={style.item__edit}
                                onBlur={this.saveTextMemoHandler.bind(this)}
                                onChange={this.editTextMemoHandler.bind(this)}
                                type="text" value={this.state.text}/>:
                        <sapn className={style.item__text} onClick={this.editClickHandler.bind(this)}>{text}</sapn>
                }
            </div>
        );
    }
}