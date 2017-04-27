import React, {Component} from 'react';
import MemoListApp from './MemoListApp'
import { Provider } from 'react-redux'
import store from '../store'

export default class App extends Component {
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