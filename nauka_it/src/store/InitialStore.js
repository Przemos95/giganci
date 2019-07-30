import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import ApiMiddleware from './ApiMiddleware'

import user from '../reducers/userReducer';
import loading from '../reducers/loaderReducer';
import articles from '../reducers/articlesReducer';
import quiz from '../reducers/quizReducer';

const rootReducer = combineReducers({
    user,
    loading,
    articles,
    quiz
});

const store = createStore(rootReducer, 
        applyMiddleware(thunk, ApiMiddleware)
    );

export default store;