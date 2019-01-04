export const AuthActions = {
    LOGIN_REQUEST: 'LOGIN',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILURE: 'LOGIN_FAILURE',
    LOGOUT_REQUEST: 'LOGOUT_REQUEST'
};

export const authReducer = (state = {
    isFetching: false,
    hasLoadedSessionStorage: false,
    isAuthenticated: false,
    promptLogin: true,
    email: ''
}, action) => {
    switch (action.type) {
        case AuthActions.LOGIN_REQUEST:
            return {
                ...state,
                isFetching: true,
                isAuthenticated: false
            };
        case AuthActions.LOGIN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                isAuthenticated: true,
                promptLogin: false,
                email: action.email
            };
        case AuthActions.LOGIN_FAILURE:
            return {
                ...state,
                isFetching: false,
                isAuthenticated: false,
                errorMessage: action.errorMessage
            };
        default:
            return state;
    }

};