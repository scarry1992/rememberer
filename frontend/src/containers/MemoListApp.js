import React from 'react'
import { connect, Provider } from 'react-redux'
import * as ActionCreators from '../actions'
import { bindActionCreators } from 'redux'
import AppComponent from '../components/AppComponent'
import store from '../store'

const mapStateToProps = (state) => ({
    entities: state.entities,
    usersById:state.usersById,
    shownType: state.shownType
});

const mapDispatchToProps = (dispatch) => ({
    memoActions: bindActionCreators(ActionCreators.memosActions, dispatch),
    userActions: bindActionCreators(ActionCreators.usersActions, dispatch),
    shownActions: bindActionCreators(ActionCreators.shownTypeActions, dispatch)
});

const MemoListApp = connect(mapStateToProps, mapDispatchToProps)(AppComponent);

const App = () => {
    return (
        <div>
            <Provider store={store}>
                <MemoListApp/>
            </Provider>
        </div>
    );
};

export default App;