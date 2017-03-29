import React, {Component, PropTypes} from 'react'
import ShownTypes from '../../constants/ShownTypes'
import map from 'lodash/map'

export default class ShownTypeToggler extends Component {
    static get propTypes() {
        return {
            onTogglerClick: PropTypes.func.isRequired
        }
    }

    onChange(e) {
        this.props.onTogglerClick(e.target.value)
    };

    render() {
        return (
            <select value={this.props.shownType} name="shownType" id="shownType" onChange={this.onChange.bind(this)}>
                {map(ShownTypes, (type, index) => <option key={index} value={type}>{type}</option>)}
            </select>
        );
    }
}