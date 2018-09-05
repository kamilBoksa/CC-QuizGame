import * as actionTypes from './actionTypes';

export const setCategory = (selCatName) => {
    return {
        type: actionTypes.SET_CATEGORY,
        categoryName: selCatName
    };
};

export const getCategories = () => {
    //fetch from API in future
    const categories = ["Algorithms", "DataStructures", "Math", "Codecool", "Biology"];
    return {
        type: actionTypes.GET_CATEGORIES,
        categories: categories
    }
};
