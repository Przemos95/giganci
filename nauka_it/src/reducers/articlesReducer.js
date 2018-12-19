import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../store/index';

const initialState = {
    articleList: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_ARTICLES: 
            return getArticlesSuccess(state, action);
        default:
            return state;
    }
};

const getArticlesSuccess = (state, action) => {
    return updateObject(state, {articleList: action.articles});
};

export default reducer;