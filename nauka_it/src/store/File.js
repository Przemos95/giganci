import axios from 'axios';

import {host} from '../components/common/config';

export const onGetFiles = (group) => {
    let headers = {
        'headers': {
            'Content-Type': 'application/json;text/plain;text/json',
            'Accept': 'application/json'
        }
    };
    const token = localStorage.getItem('accessUserToken');
    if(token != null){
        headers.headers['Authorization'] = `Bearer ${JSON.parse(token)}`
    }

    return axios
        .get(`${host}/api/file/getGroup?group=${group}`, headers)
        .then(response => {
            return response;
        });
};

export const onGetFile = (group, name) => {
    let headers = {
        'headers': {
            'Content-Type': 'application/json;text/plain;text/json',
            'Accept': 'application/json'
        }
    };
    const token = localStorage.getItem('accessUserToken');
    if(token != null){
        headers.headers['Authorization'] = `Bearer ${JSON.parse(token)}`
    }

    return axios
        .get(`${host}/api/file/Get?group=${group}&name=${name}`, headers)
        .then(response => {
            return response;
        });
};