import {AuthActions, authReducer} from "./auth-reducer";
import $ from "jquery";

export function loginUser(creds) {
    return (dispatch, getStore) => {
        dispatch(requestLogin());
        $.ajax({
            url: '/marketplace/api/rest/auth/login',
            type: 'POST',
            dataType: 'json',
            data: JSON.stringify(creds)
        })
            .done((payload) => {
                console.log('LOGIN_SUCCESS', payload);
                dispatch({
                        type: AuthActions.LOGIN_SUCCESS,
                        payload
                    }
                );
            })
            .fail((xhr, status, error) => {
                if (error.response && error.response.status === 403) {
                    dispatch(loginError('User not authenticated'))
                } else {
                    dispatch(loginError('Some error'))
                }
            });
    }
}

export function checkLoginStatus() {
    return (dispatch, getStore) => {
        dispatch(requestLogin());
        $.ajax({
            url: '/marketplace/api/rest/auth/check',
            type: 'GET',
            dataType: 'json'
        })
            .done((payload) => {
                console.log('LOGIN_SUCCESS', payload);
                dispatch({
                        type: AuthActions.LOGIN_CHECK_SUCCESS,
                        payload
                    }
                );
            })
            .fail((xhr, status, error) => {
                if (error.response && error.response.status === 403) {
                    dispatch(loginError('User not authenticated'));
                } else {
                    dispatch(loginError('Some error'));
                }
            });
    }
}

export function logoutUser() {
    return dispatch => {
        dispatch({type: 'LOGOUT_SUCCESS'})
    }
}

export function loginError(errorMessage) {
    return {
        type: 'LOGIN_FAILURE',
        errorMessage
    }
}

function requestLogin() {
    return {type: 'LOGIN_REQUEST'}
}
