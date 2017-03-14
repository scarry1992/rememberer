import React, { Component, PropTypes } from 'react'

export default class MemoItem extends Component {
    static get propTypes() {
        return {
            memo: PropTypes.shape({
                create: PropTypes.number.isRequired,
                text: PropTypes.string.isRequired,
                complete: PropTypes.oneOfType([
                    PropTypes.bool,
                    PropTypes.number
                ])
            })
        }
    }

    render() {
        const { create, text, complete } = this.props.memo;

        return (
            <div>
                <p>{new Date(create).toLocaleDateString()}</p>
                <p>{text}</p>
                <p>{complete ? new Date(complete).toLocaleDateString(): ""}</p>
            </div>
        );
    }
}