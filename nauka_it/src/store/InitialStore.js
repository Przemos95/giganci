import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import user from '../reducers/userReducer';
import loading from '../reducers/loaderReducer';
import articles from '../reducers/articlesReducer';

const rootReducer = combineReducers({
    user,
    loading,
    articles
});

const store = createStore(rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk));

export default store;