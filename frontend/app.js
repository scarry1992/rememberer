import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import shownTypes from './src/constants/ShownTypes';
import  { createStore, compose, applyMiddleware } from 'redux';
import { reducer } from './src/reducers'
import MemoListApp from './src/containers/MemoListApp'
import { Provider } from 'react-redux'
import * as actions from './src/actions'
import './testData/memos.json'
import thunkMiddleware from 'redux-thunk'

const initialState = {
    shownType: shownTypes.NOT_COMPLETED,
    entities: {
        memos: {
            1: {
                id:1,
                create: Date.now(),
                text: 'Get money!',
                complete: false,
                userId: 1
            },
            2: {
                id:2,
                create: Date.now(),
                text: 'Get money!',
                complete: Date.now() + 10000,
                userId: 1
            }
        },
        users: {
            1: {
                id: 1,
                nickname: 'Scarry',
                firstName: 'Sergei',
                surName: 'Buntsevich'
            }
        }
    },
    memosByUserId: {
        isFetching: false,
        didInvalidate: false,
        lastTimeUpdate: 1490105220671,
        memos: [1,2]
    },
    activeUser: 1
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(thunkMiddleware))
);

//store.dispatch(ShownTypeActions.changeShownType(shownTypes.COMPLETED));

// class App extends Component {
//     render() {
//         return (
//             <div>
//                 <Provider store={store}>
//                     <MemoListApp/>
//                 </Provider>
//             </div>
//         );
//     }
// }
//
//
// ReactDOM.render(<App/>, document.getElementById('root'));

store.dispatch(actions.memosActions.addMemo('Hello App'));
//
// store.dispatch(actions.editMemo(1, 'Editted'));
//
// store.dispatch(actions.deleteMemo(2));
//
//store.dispatch(actions.serverInfoActions.fetchServerInfo(1));
store.dispatch(actions.memosActions.fetchMemos(1));