import * as actionTypes from './actionTypes';
import {host} from '../components/common/config';
import axios from 'axios';
import uuid from 'uuid/v4';

export const onGetAllArticles = () => {
    return dispatch => {
        dispatch({
            type: 'API',
            url: 'article/getAll',
            method: 'GET',
            loaderId: `articles_${uuid()}`,
            actionType: actionTypes.GET_ARTICLES
        });
    };
};

export const onGetArticle = (id) => {
    let headers = {
        'headers': {
            'Content-Type': 'application/json;text/plain;text/json',
            'Accept': 'application/json'
        }
    };

    return axios
        .get(`${host}/api/article/get?id=` + id, headers)
        .then(response => {
            return response;
        });
};

