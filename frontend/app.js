import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './src/containers/App'
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
    module.hot.accept('./src/containers/App', () => {
        render(App)
    });
}

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