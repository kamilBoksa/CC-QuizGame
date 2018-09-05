import * as actionTypes from './actionTypes';

export const setAnswer = (answer) => {
    return {
        type: actionTypes.SET_ANSWER,
        selectedAnswer: answer
    };
};

export const getAnswers = () => {
    //fetch from API in future
    const answers = ["Okon", "Masło", "Mydło", "Lubie placki"];
    return {
        type: actionTypes.GET_ANSWERS,
        answers: answers
    }
};