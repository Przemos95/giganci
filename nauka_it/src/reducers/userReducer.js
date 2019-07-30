import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../store/index';
import jwtDecode from 'jwt-decode';

const initialState = {
    user: null,
    token: null,
    isAuth: false,
    loginError: false
};

const reducer = (state = initialState, action) => {
    if (!state.user && localStorage.accessUserToken != null) {
        let expireDate = jwtDecode(localStorage.accessUserToken).exp;
        if (new Date(expireDate * 1000) < new Date()) {
            state.user = null;
            state.token = null;
            state.isAuth = false;
            state.loginError = false;
        } else {
            state.user = {...JSON.parse(localStorage.user)};
            state.token = JSON.parse(localStorage.accessUserToken);
            state.isAuth = true;
        }
    }
    
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS: return loginSuccess(state, action);
        case actionTypes.LOGIN_FAILED: return loginFailed(state, action);
        case actionTypes.LOGOUT: return logout(state, action);
        default: return state;
    }
};

const loginSuccess = (state, action) => {
    return updateObject(state, {token: action.token, user: action.user, isAuth: true, loginError: false});
};

const loginFailed = (state, action) => {
    return updateObject(state, {loginError: true});
};

const logout = (state, action) => {
    return updateObject(state, {user: null, token: null, isAuth: false, loginError: false});
};

export default reducer;