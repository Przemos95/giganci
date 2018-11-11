import axios from 'axios';

import {host} from '../components/common/config';

export const onGetMaterials = (group) => {
    let headers = {
        'headers': {
            'Content-Type': 'application/json;text/plain;text/json',
            'Accept': 'application/json'
        }
    };

    return axios
        .get(`${host}/api/document/getGroup?group=${group}`, headers)
        .then(response => {
            return response;
        });
};

export const onGetMaterial = (group, name) => {
    let headers = {
        'headers': {
            'Content-Type': 'application/json;text/plain;text/json',
            'Accept': 'application/json'
        }
    };

    return axios
        .get(`${host}/api/document/Get?group=${group}&name=${name}`, headers)
        .then(response => {
            return response;
        });
};