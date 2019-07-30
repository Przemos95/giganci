import {host} from '../components/common/config';
import axios from 'axios';
import { addLoader, removeLoader } from '../actions/loader';

const ApiMiddleware = ({ dispatch }) => next => (action) => {
    next(action);
    if (action.type !== 'API')
        return;
    let {
        url,
        method,
        params,
        data,
        loaderId,
        actionType
    } = action;
    
    dispatch(addLoader(loaderId));

    let headers = {
        'Content-Type': 'application/json;text/plain;text/json',
        'Accept': 'application/json',
    }
    if (!!localStorage.accessUserToken) {
        headers.Authorization = `Bearer ${JSON.parse(localStorage.accessUserToken)}`
    }

    const request = {
        headers: headers,
        url: `${host}/api/${url}`,
        method,
        params,
        data
    };

    axios.request(request)
        .catch(error => {
            dispatch(removeLoader(loaderId));
            return false;
        })
        .then((response) => {
            dispatch(removeLoader(loaderId));
            dispatch({
                type: actionType,
                data: response.data 
            });
        });
};

export default ApiMiddleware;