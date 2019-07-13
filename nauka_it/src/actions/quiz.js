import * as actionTypes from './actionTypes';
import {host} from '../components/common/config';
import axios from 'axios';
import { addLoader, removeLoader } from './loader';
import { RandomOrder } from '../components/common/Helpers/RadnomOrder';
import uuid from 'uuid/v4';

export const onCheckTime = (quizId) => {
    const loaderId = `quiz_${uuid()}`;
    return dispatch => {
        dispatch(addLoader(loaderId));

        let headers = {
            'headers': {
                'Content-Type': 'application/json;text/plain;text/json',
                'Accept': 'application/json'
            }
        };
        let url = `${host}/api/quiz/checkTime?id=${quizId}`;

        axios
            .get(url, headers)
            .catch(error => {
                dispatch(removeLoader(loaderId));
                return false;
            })
            .then(response => {
                dispatch(removeLoader(loaderId));
                dispatch({
                    type: actionTypes.CHECK_TIME,
                    startTime: response.data
                });
                return true;
            });
    };
};

export const onGetQuestions = (quizId) => {
    const loaderId = `quiz_${uuid()}`;
    return dispatch => {
        dispatch(addLoader(loaderId));
        let headers = {
            'headers': {
                'Content-Type': 'application/json;text/plain;text/json',
                'Accept': 'application/json'
            }
        };
        let url = `${host}/api/quiz/questions?id=${quizId}`;
        axios
            .get(url, headers)
            .catch(error => {
                dispatch(removeLoader(loaderId));
                return false;
            })
            .then(response => {
                dispatch(removeLoader(loaderId));
                dispatch({
                    type: actionTypes.GET_QUESTIONS,
                    questions: RandomOrder(response.data)
                });
                return true;
            });
    };
};


export const onSetAnswer = (questionId, answer, seconds, answers) => {
    const loaderId = `quiz_${uuid()}`;
    return dispatch => {
        dispatch(addLoader(loaderId));
        let params = {
            questionId,
            answer,
            seconds,
            answers
        };
        let url = `${host}/api/quiz/answer`;
        
        let config = {
            headers: {'Authorization': `Bearer ${JSON.parse(localStorage.getItem('accessToken'))}`}
        };

        return axios
            .post(url, params, config)
            .catch(error => {
                dispatch(removeLoader(loaderId));
                return false;
            })
            .then(response => {
                dispatch(removeLoader(loaderId));
                dispatch({
                    type: actionTypes.SET_ANSWER,
                    classification: response.data
                });
                return true;
            });
    };
};