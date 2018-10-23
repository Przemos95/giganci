import axios from 'axios';

import {host} from '../components/common/config';

export const onSaveEmail = (email) => {
    let headers = {
        'Content-Type': 'application/json'
    };
    
    let url = `${host}/api/email/save`;
 
    return axios
        .post(url, email, {headers})
        .catch(error => {})
        .then(response => {
            return response;
        });
};