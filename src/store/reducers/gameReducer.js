import React from 'react';
import {updateObject} from "../utility";
import * as actionTypes from "../actions/actionTypes";

const initialState = {
    selectedAnswer: " ",
    answers: [],
    questions: [],
    currentQuestion: null
};

const setQuestion = (state, action) => {
    const updatedState = {
        currentQuestion: action.selectedQuestion,
    };
    return updateObject(state, updatedState);
};

const getQuestions = (state, actions) => {
    const updatedState = {
        questions: actions.questions
    };
    return updateObject(state, updatedState)
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
        case actionTypes.GET_QUESTIONS: return getQuestions(state, action);
        case actionTypes.SET_QUESTION: return setQuestion(state, action);
        default: return state;
    }
};

export default setAnswerReducer;