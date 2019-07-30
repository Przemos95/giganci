import * as actionTypes from './actionTypes';
import uuid from 'uuid/v4';

export const onGetQuizzes = () => {
    const loaderId = `quiz_${uuid()}`;
    return dispatch => {
        if (!localStorage.getItem('accessUserToken')) {
            dispatch({
                type: actionTypes.GET_QUIZZES,
                quizzes: []
            });
            return;
        }

        dispatch({
            type: 'API',
            url: 'quiz/getQuizzes',
            method: 'GET',
            loaderId,
            actionType: actionTypes.GET_QUIZZES
        });
    };
};

export const onCheckTime = (quizId) => {
    return dispatch => {
        dispatch({
            type: 'API',
            url: 'quiz/checkTime',
            method: 'GET',
            loaderId: `quiz_${uuid()}`,
            actionType: actionTypes.CHECK_TIME,
            params: {
                id: quizId
            }
        });
    };
};

export const onGetQuestions = (quizId) => {
    return dispatch => {
        dispatch({
            type: 'API',
            url: 'quiz/questions',
            method: 'GET',
            loaderId: `questions_${uuid()}`,
            actionType: actionTypes.GET_QUESTIONS,
            params: {
                id: quizId
            }
        });
    };
};


export const onSetAnswer = (questionId, answer, seconds, answers) => {
    return dispatch => {
        dispatch({
            type: 'API',
            url: 'quiz/answer',
            method: 'POST',
            loaderId: `answer_${uuid()}`,
            actionType: actionTypes.SET_ANSWER,
            data: {
                questionId,
                answer,
                seconds,
                answers
            }
        });
    };
};

export const onGetClassification = (quizId) => {
    return dispatch => {
        dispatch({
            type: 'API',
            url: 'quiz/classification',
            method: 'GET',
            loaderId: `classification_${uuid()}`,
            actionType: actionTypes.SET_ANSWER,
            params: {
                id: quizId
            }
        });
    };

};