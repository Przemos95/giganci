import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../store/index';

const initialState = {
    quizzes: [],
    startTime: null,
    questions: [],
    classification: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_QUIZZES:
            return getQuizzes(state, action);
        case actionTypes.CHECK_TIME:
            return checkTime(state, action);
        case actionTypes.GET_QUESTIONS:
            return getQuestions(state, action);
        case actionTypes.SET_ANSWER:
            return setAnswer(state, action);
        default:
            return state;
    }
};

const getQuizzes = (state, action) => {
    return updateObject(state, {quizzes: action.quizzes});
};

const checkTime = (state, action) => {
    return updateObject(state, {startTime: action.startTime});
};

const getQuestions = (state, action) => {
    return updateObject(state, {questions: action.questions});
};

const setAnswer = (state, action) => {
    return updateObject(state, {classification: action.classification});
};

export default reducer;