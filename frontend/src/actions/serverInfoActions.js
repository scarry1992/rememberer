import types from '../constants/ActionTypes'
import * as fetchActions from './fetchActions'

function fetchServerInfo (userId = 0) {
    return (dispatch) => {
        if (!userId) {
            return dispatch(fetchActions.fetchError('serverInfo', true, new Error('Invalid user ID')));
        }

        dispatch(fetchActions.fetchRequest('serverInfo', true));

        return fetch('/assets/serverInfo.json').
            then(responce => responce.json()).
            then(json => dispatch(fetchActions.fetchSuccess('serverInfo', false, json))).
            catch(err => dispatch(fetchActions.fetchError('serverInfo', false, err)))
    }
}

export { fetchServerInfo }