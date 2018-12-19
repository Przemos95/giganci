import * as actionTypes from './actionTypes';
import {host} from '../components/common/config';
import axios from 'axios';
import { addLoader, removeLoader } from './loader';
import uuid from 'uuid/v4';

export const getArticlesSuccess = (articles) => {
    return {
        type: actionTypes.GET_ARTICLES,
        articles: articles
    };
};

export const onGetAllArticles = () => {
    const loaderId = `articles_${uuid()}`;
    return dispatch => {
        dispatch(addLoader(loaderId));

        const url = `${host}/api/article/getAll`;
        const headers = { 'Content-Type': 'application/json' };

        axios
            .get(url, {headers})
            .catch(error => {
                dispatch(removeLoader(loaderId));
                return false;
            })
            .then(response => {
                dispatch(removeLoader(loaderId));
                dispatch(getArticlesSuccess(response.data));
                return true;
            });
    };
};