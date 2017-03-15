import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import shownTypes from './src/constants/ShownTypes';
import  { createStore } from 'redux';
import { reducer } from './src/reducers'
import MemoListApp from './src/containers/MemoListApp'
import { Provider } from 'react-redux'
//import ShownTypeActions from './src/actions/shownTypeActions'

const initialState = {
    shownType: shownTypes.NOT_COMPLETED,
    memos: {
        memosIds: [1,2],
        memosById: {
            1: {
                create: Date.now(),
                text: 'Get money!',
                complete: false
            },
            2: {
                create: Date.now(),
                text: 'Get money!',
                complete: Date.now() + 10000
            }
        }
    }
};

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//store.dispatch(ShownTypeActions.changeShownType(shownTypes.COMPLETED));

class App extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <MemoListApp/>
                </Provider>
            </div>
        );
    }
}


ReactDOM.render(<App/>, document.getElementById('root'));

// store.dispatch(actions.addMemo('Hello App'));
//
// store.dispatch(actions.editMemo(1, 'Editted'));
//
// store.dispatch(actions.deleteMemo(2));
//