import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../store/index';

const initialState = {
    areLoading: [],
    showLoader: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_LOADER:
            return addLoader(state, action);
        case actionTypes.REMOVE_LOADER:
            return removeLoader(state, action);
        default:
            return state;
    }
};

const addLoader = (state, action) => {
    return updateObject(state, { areLoading: [...state.areLoading, action.name], showLoader: true});
};

const removeLoader = (state, action) => {
    const areLoadingNow = state.areLoading.filter(s => s !== action.name);
    return updateObject(state, { areLoading: areLoadingNow, showLoader: areLoadingNow.length !== 0});
};

export default reducer;