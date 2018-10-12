import * as actionTypes from './actionTypes';
import axios from 'axios';

export const setCategory = (selCatName) => {
    return {
        type: actionTypes.SET_CATEGORY,
        categoryName: selCatName
    };
};

export const getCategories = (categories) => {
    const categoriesArr = [];
    for(let i=0; i<categories.length;i++) {
        categoriesArr.push(categories[i]._name)
    }

    return {
        type: actionTypes.GET_CATEGORIES,
        categories: categoriesArr
    }
};

export const initCategories = () => {
    return dispatch => {
        axios.get("https://cc-quiz-game.herokuapp.com/categories")
            .then(response => {
                dispatch(getCategories(response.data))
            })
            .catch(error => {
               console.log(error);
            });
    };
};
