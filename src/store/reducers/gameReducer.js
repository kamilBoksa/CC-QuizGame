import React from 'react';
import {updateObject} from "../utility";

const initialState = {
    selectedAnswer: " "
};

const setAnswer = (state, action) => {
    const updatedState = {
        selectedAnswer: action.selectedAnswer,
    };
    return updateObject(state, updatedState);
};

const setCategoryReducer = (state=initialState, action) => {
    return setAnswer(state, action);
};

export default setCategoryReducer;