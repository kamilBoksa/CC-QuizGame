import * as actionTypes from './actionTypes';
import axios from 'axios';

export const setCategory = (selCatName, categories) => {
    let categoryId = "";
    for(let i=0; i<categories.length; i++) {
        if(categories[i].categoryName === selCatName) {
            categoryId = categories[i].categoryId;
        }
    }
    return {
        type: actionTypes.SET_CATEGORY,
        categoryName: selCatName,
        categoryId: categoryId
    };
};

export const getCategories = (categories) => {
    const categoriesArr = [];
    for(let i=0; i<categories.length;i++) {
        categoriesArr.push({
            "categoryName": categories[i].category_name,
            "categoryId": categories[i].id})
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
