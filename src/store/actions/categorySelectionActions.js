import * as actionTypes from './actionTypes';

export const setCategory = (selCatName) => {
    return {
        type: actionTypes.SET_CATEGORY,
        categoryName: selCatName
    };
};