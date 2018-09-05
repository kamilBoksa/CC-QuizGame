import React from 'react';
import {updateObject} from "../utility";

const initialState = {
    categoryName: " "
};

const setCategory = (state, action) => {
    const updatedState = {
        categoryName: action.categoryName,
    };
    return updateObject(state, updatedState);
};

const setCategoryReducer = (state=initialState, action) => {
    return setCategory(state, action);
};

export default setCategoryReducer;