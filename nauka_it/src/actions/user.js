import * as actionTypes from './actionTypes';
import {host} from '../components/common/config';
import axios from 'axios';
import { addLoader, removeLoader } from './loader';
import uuid from 'uuid/v4';

export const loginSuccess = (user, token) => {
    localStorage.setItem('accessToken', JSON.stringify(token));
    localStorage.setItem('user', JSON.stringify(user));
    return {
        type: actionTypes.LOGIN_SUCCESS,
        token: token,
        user: user
    };
};

export const loginFailed = () => {
    return {
        type: actionTypes.LOGIN_FAILED
    };
};

export const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
    return {
        type: actionTypes.LOGOUT
    };
};

export const login = (login, password) => {
    const loaderId = `login_${uuid()}`;
    return dispatch => {
        dispatch(addLoader(loaderId));
        
        const url = `${host}/api/user/Authenticate`;
        const data = { login: login, password: password };
        const headers = { 'Content-Type': 'application/json' };

        axios
            .post(url, data, {headers})
            .catch(error => {
                dispatch(loginFailed());
                dispatch(removeLoader(loaderId));
                return false;
            })
            .then(response => {
                if (!response) return false;
                dispatch(loginSuccess({
                    id: response.data.id,
                    login: response.data.login,
                    name: response.data.name,
                    group: response.data.group
                }, response.data.token));
                dispatch(removeLoader(loaderId));
                return true;
            });
    };
};