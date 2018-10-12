import * as actionTypes from './actionTypes';
import axios from "axios/index";
import {getCategories} from "./categorySelectionActions";

export const setAnswer = (answer) => {
    return {
        type: actionTypes.SET_ANSWER,
        selectedAnswer: answer
    };
};

export const updateScore = (newScore) => {
    return {
        type:actionTypes.UPDATE_SCORE,
        currentScore: newScore
    }
};

export const getQuestions = (categoryName) => {
    return dispatch => {
        axios.get("https://cc-quiz-game.herokuapp.com/categories/" + categoryName + "/question")
            .then(response => {
            dispatch(setQuestions(response.data))
        })
        .catch(error => {
            console.log(error);
        });
    }
};

export const setQuestions = (importedQuestions)=> {
    return {
        type: actionTypes.GET_QUESTIONS,
        questions: importedQuestions
    };
};

export const initQuestion = (index) => {
    return {
        type: actionTypes.INIT_QUESTION,
        currentIndex: index
    }
};

export const resetGameData = () => {
    return {
        type: actionTypes.RESET_GAME_DATA
    }
};