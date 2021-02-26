import * as AT from './authTypes';
import axios from '../../axios/axios';

export const authenticateUser = (user_id, user_pwd) => {
    const credentials = {
        user_id: user_id, 
        user_pwd: user_pwd
    }
    return dispatch => {
        dispatch({
            type : AT.LOGIN_REQUEST
        });
        axios.post(`users/checklogin`,credentials)
        .then(res => {
            let token = res.data.token;
            localStorage.setItem('jwtToken', token);
            dispatch(success(true));
        })
        .catch(err => {
            dispatch(failure());
        });
    };
};

export const logoutUser = () => {
    return dispatch => {
        dispatch({
            type : AT.LOGOUT_REQUEST
        });
        localStorage.setItem('jwtToken');
        dispatch(success(false));
    };
};

const success = isLoggedIn => {
    return {
        type : AT.SUCCESS,
        payload : isLoggedIn
    };
};

const failure = () => {
    return {
        type : AT.FAILURE,
        payload : false
    };
};