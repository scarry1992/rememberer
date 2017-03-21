import types from '../constants/ActionTypes'
import * as fetchActions from './fetchActions'

/*todo Придумать как использовать для всего общие генераторы экшенов фетча*/

const fetchServerInfo = (userId = 0) => {
    return (dispatch) => {
        if (!userId) {
            return dispatch(fetchActions.fetchError(true, new Error('Invalid user ID')));
        }

        dispatch(fetchActions.fetchRequest(true));

        return fetch('/assets/serverInfo.json').
            then(responce => responce.json()).
            then(json => dispatch(fetchActions.fetchSuccess(false, json))).
            catch(err => dispatch(fetchActions.fetchError(false, err)))
    }
};