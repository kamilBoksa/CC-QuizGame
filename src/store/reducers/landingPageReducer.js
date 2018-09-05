import React from 'react';
import {updateObject} from "../utility";

const initialState = {
    userNickname: " "
};

const setUserNickname = (state, action) => {
    const updatedState = {
        userNickname: action.userNickname,
    };
    return updateObject(state, updatedState);
};

const landingPageReducer = (state=initialState, action) => {
    return setUserNickname(state, action);
};

export default landingPageReducer;