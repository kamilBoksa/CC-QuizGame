import React from 'react';
import {updateObject} from "../utility";
import * as actionTypes from "../actions/actionTypes";

const initialState = {
    selectedAnswer: " ",
    answers: []
};

const setAnswer = (state, action) => {
    const updatedState = {
        selectedAnswer: action.selectedAnswer,
    };
    return updateObject(state, updatedState);
};

const getAnswers = (state, action) => {
    const updatedState = {
        answers: action.answers
    };
    return updateObject(state, updatedState);
};

const setAnswerReducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_ANSWER: return setAnswer(state, action);
        case actionTypes.GET_ANSWERS: return getAnswers(state, action);
        default: return state;
    }
};

export default setAnswerReducer;