import axios from 'axios';

import {host} from '../components/common/config';

export const onGetAllArticles = () => {
    let headers = {
        'headers': {
            'Content-Type': 'application/json;text/plain;text/json',
            'Accept': 'application/json'
        }
    };

    return axios
        .get(`${host}/api/article/getAll`, headers)
        .then(response => {
            return response;
        });
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