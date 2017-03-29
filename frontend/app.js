import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import shownTypes from './src/constants/ShownTypes';
import  { createStore, compose, applyMiddleware } from 'redux';
import { reducer } from './src/reducers'
import MemoListApp from './src/containers/MemoListApp'
import { Provider } from 'react-redux'
//import * as actions from './src/actions'
import './testData/memos.json'
import './testData/users.json'
import thunkMiddleware from 'redux-thunk'

const initialState = {
    shownType: shownTypes.NOT_COMPLETED,
    entities: {
        memos: {
            1: {
                id:1,
                create: 1490103220671,
                text: 'MemoTestNotComplited',
                complete: false
            },
            2: {
                id:2,
                create: Date.now(),
                text: 'MemoTestComplited',
                complete: Date.now() + 10000
            }
        },
        users: {
            1: {
                id: 1,
                nickname: 'Self',
                firstName: 'NoName',
                surName: 'NoSurName'
            }
        }
    },
    memosById: {
        isFetching: false,
        didInvalidate: false,
        lastTimeUpdate: 1490105220671,
        memos: [1,2]
    },
    usersById: {
        isFetching: false,
        didInvalidate: true,
        lastTimeUpdate: 1490105220671,
        activeUser: 1
    }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(thunkMiddleware))
);

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

// store.dispatch(actions.memosActions.addMemo('Hello App'));
// store.dispatch(actions.memosActions.editMemo(2, 'Edited MEMO'));
// store.dispatch(actions.memosActions.deleteMemo(1));
// store.dispatch(actions.memosActions.toggleType(2));
// store.dispatch(actions.memosActions.toggleValidateMemos());
//store.dispatch(actions.memosActions.fetchMemos(1));

// store.dispatch(actions.usersActions.changeUser({
//     id: 3,
//     nickname: 'Bambi',
//     firstName: 'Oleg',
//     surName: 'Shelkov'
//
// })).then(data => {
//     store.dispatch(actions.usersActions.editUser(3, {
//         nickname: 'Scarrabey',
//         surName: 'Serov'
//     }));
//     store.dispatch(actions.usersActions.toggleValidateUsers());
// });