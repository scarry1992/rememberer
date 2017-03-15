import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import ShownTypeToggler from '../components/shownType/ShownTypeToggler'
import {shownTypeActions} from '../actions'

// class ShownTypeTogglerContainer extends Component {
//     static get propTypes() {
//         return {
//             shownType: PropTypes.string.isRequired,
//             onTogglerClick: PropTypes.function.isRequired
//         }
//     }
//
//     render() {
//         return (
//             <div>
//                 <ShownTypeToggler onTogglerClick={this.props.onTogglerClick} shownType={this.props.shownType}/>
//             </div>
//         );
//     }
// }

function mapStateToProps(state) {
    return {
        shownType: state.shownType
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onTogglerClick: (shownType) => {
            dispatch(shownTypeActions.changeShownType(shownType))
        }
    }
}

const ShownTypeTogglerContainer = connect(mapStateToProps, mapDispatchToProps)(ShownTypeToggler);

export {ShownTypeTogglerContainer}