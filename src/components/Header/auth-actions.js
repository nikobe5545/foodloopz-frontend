import {AuthActions} from "./auth-reducer";
import $ from "jquery";

export function loginUser(creds) {
    return (dispatch, getStore) => {
        dispatch(requestLogin());
        $.ajax({
            url: '/marketplace/api/rest/auth/login',
            type: 'POST',
            dataType: 'json',
            data: creds,
            done: (response) => {
                dispatch({
                        type: AuthActions.LOGIN_SUCCESS,
                        token: response.data.token,
                        email: creds.email,
                        storeOwnerId: response.data.storeOwnerId,
                        admin: response.data.admin
                    }
                );
            },
            fail: (xhr, status, error) => {
                if (error.response && error.response.status === 401) {
                    dispatch(loginError('User not authenticated'))
                } else {
                    dispatch(loginError('Some error'))
                }
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
