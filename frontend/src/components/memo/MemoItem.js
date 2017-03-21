import React, { Component, PropTypes } from 'react'

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

    deleteHandler(e) {
        this.props.actions.deleteMemo(this.props.memo.id)
    }

    editClickHandler(e) {
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
            <div data-id={id}>
                <p>{new Date(create).toLocaleDateString()}</p>
                {
                    this.state.edit?
                        <input  onBlur={this.saveTextMemoHandler.bind(this)}
                                onChange={this.editTextMemoHandler.bind(this)}
                                type="text" value={this.state.text}/>:
                        <p onClick={this.editClickHandler.bind(this)}>{text}</p>
                }
                <p>{complete ? new Date(complete).toLocaleDateString(): ""}</p>
                <button onClick={this.deleteHandler.bind(this)}>Delete</button>
                <button onClick={this.toggleTypeHandler.bind(this)}>Toggle</button>
            </div>
        );
    }
}