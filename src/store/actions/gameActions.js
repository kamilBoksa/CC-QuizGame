import * as actionTypes from './actionTypes';

export const setAnswer = (answer) => {
    return {
        type: actionTypes.SET_ANSWER,
        selectedAnswer: answer
    };
};

export const getAnswers = () => {
    //fetch from API in future
    const answers = ["A-1", "A-2", "A-3", "A-4"];
    return {
        type: actionTypes.GET_ANSWERS,
        answers: answers
    }
};

export const setQuestion = (questions) => {
    let question = questions[Math.floor(Math.random()*questions.length)];
    return {
        type: actionTypes.SET_QUESTION,
        selectedQuestion: question
    };
};

export const getQuestions = () => {
    //fetch from API in future
    const categoryQuestions = ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7"];
    return {
        type: actionTypes.GET_QUESTIONS,
        questions: categoryQuestions
    }
};