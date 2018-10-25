import {updateObject} from "../utility";
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    categories: [],
    categoryName: " ",
    categoryId: " "
};

const getCategories = (state, action) => {
    const updatedState = {
        categories: action.categories
    };
    return updateObject(state, updatedState);
};

const setCategory = (state, action) => {
    const updatedState = {
        categoryName: action.categoryName,
        categoryId: action.categoryId
    };
    return updateObject(state, updatedState);
};

const setCategoryReducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_CATEGORY: return setCategory(state, action);
        case actionTypes.GET_CATEGORIES: return getCategories(state, action);
        default: return state;
    }
};

export default setCategoryReducer;