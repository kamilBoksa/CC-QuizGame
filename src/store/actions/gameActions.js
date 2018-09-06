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

export const setQuestion = (questions) => {
    let question = questions[Math.floor(Math.random()*questions.length)];
    return {
        type: actionTypes.SET_QUESTION,
        selectedQuestion: question
    };
};

export const getQuestions = () => {
    //fetch from API in future
    const categoryQuestions = ["Jak?", "Gdzie?", "Kiedy?", "Za ile?"];
    return {
        type: actionTypes.GET_QUESTIONS,
        questions: categoryQuestions
    }
};