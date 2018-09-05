import * as actionTypes from './actionTypes';

export const setUserNickname = (nickname) => {
    return {
        type: actionTypes.SET_USER_NICKNAME,
        userNickname: nickname
    };
};