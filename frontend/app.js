import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import shownTypes from './src/constants/ShownTypes';
import  { createStore } from 'redux';
import { reducer } from './src/reducers'
import actions from './src/actions'


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


// class App extends Component {
//     render() {
//         return (
//             <div>
//                 Hello, App!
//             </div>
//         );
//     }
// }
//
// ReactDOM.render(<App/>, document.getElementById('root'))

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch(actions.addMemo('Hello App'));

store.dispatch(actions.editMemo(1, 'Editted'));

store.dispatch(actions.deleteMemo(2));

store.dispatch(actions.changeShownType(shownTypes.COMPLETED));