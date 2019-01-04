import {sendMessageToMainEndpoint} from "../../actions/websocketActions";
import {AuthActions} from "./auth-reducer";

export const loginUser = (credentials) => {
    return (dispatch) => {
        // We dispatch requestLogin to kickoff the call to the API
        dispatch(sendMessageToMainEndpoint(AuthActions.LOGIN_REQUEST, ));
        return axios.post(process.env.apiBaseUrl + '/login', creds)
            .then(response => {
                dispatch({
                        type: 'LOGIN_SUCCESS',
                        token: response.data.token,
                        email: creds.email,
                        storeOwnerId: response.data.storeOwnerId,
                        admin: response.data.admin
                    }
                )
                dispatch(hideTint())
                dispatch(initArticles())
            }).catch((error) => {
                if (error.response && error.response.status === 401) {
                    dispatch(loginError(i18n.errors.login.auth))
                } else {
                    dispatch(loginError(i18n.errors.login.general))
                }
            })
    }
};

export function logoutUser () {
    return dispatch => {
        dispatch({ type: 'LOGOUT_SUCCESS' })
    }
}

export function loginError (errorMessage) {
    return {
        type: 'LOGIN_FAILURE',
        errorMessage
    }
}

function requestLogin () {
    return { type: 'LOGIN_REQUEST' }
}
