import * as actionTypes from './actionTypes';

export const addLoader = name => {
    return{
        type: actionTypes.ADD_LOADER,
        name: name
    };
};

export const removeLoader = name => {
    return{
        type: actionTypes.REMOVE_LOADER,
        name: name
    };
};