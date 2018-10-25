import {updateObject} from "../utility";
import * as actionTypes from "../actions/actionTypes";

const initialState = {
    selectedAnswer: " ",
    questions: [],
    question: {
        description: "",
        correctAnswer: "",
        answers: [],
        id: ""
    },
    currentScore: 0,
};

const getQuestions = (state, action) => {
    const updatedState = {
        questions: action.questions
    };
    return updateObject(state, updatedState);
};

const updateScore = (state, action) => {
    const updatedScore = {
        currentScore: action.currentScore
    };
    return updateObject(state, updatedScore);
};

const initQuestion = (state, action) => {
    const actualQuestion = state.questions[action.currentIndex];
    const updatedState = {
        question: {
            description: actualQuestion.question_description,
            correctAnswerId: actualQuestion.correct_answer_id,
            answers: actualQuestion.answers,
            id: actualQuestion.id
        }
    };
    return updateObject(state, updatedState)
};

const resetGameData = (state) => {
    const updatedState = {
        selectedAnswer: " ",
        questions: [],
        question: {
            description: "",
            correctAnswer: "",
            answers: [],
            id: ""
        },
        questionCounter: 1,
        currentScore: 0,
    };
    return updateObject(state, updatedState);
};

const gameReducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_QUESTIONS: return getQuestions(state, action);
        case actionTypes.UPDATE_SCORE: return updateScore(state, action);
        case actionTypes.INIT_QUESTION: return initQuestion(state, action);
        case actionTypes.RESET_GAME_DATA: return resetGameData(state, action);
        default: return state;
    }
};

export default gameReducer;