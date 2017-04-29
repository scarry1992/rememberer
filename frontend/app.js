import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './src/containers/MemoListApp'
//import * as actions from './src/actions'
import './testData/memos.json'
import './testData/users.json'

const render = (Component) => {
    ReactDOM.render(
        <Component/>,
        document.getElementById('root')
    );
};

render(App);

if (module.hot) {
    module.hot.accept('./src/containers/MemoListApp', () => {
        render(App)
    });
}