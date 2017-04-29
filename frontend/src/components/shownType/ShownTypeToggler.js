import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ShownTypes from '../../constants/ShownTypes'
import map from 'lodash/map'
import style from './ShownTypeToggler.pcss'

const translateType = {
    [ShownTypes.COMPLETED]: 'Завершённые',
    [ShownTypes.NOT_COMPLETED]: 'Активные'
};

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
            <select className={style.toggler} value={this.props.shownType} name="shownType" id="shownType" onChange={this.onChange.bind(this)}>
                {map(ShownTypes, (type, index) => <option key={index} value={type}>{translateType[type]}</option>)}
            </select>
        );
    }
}