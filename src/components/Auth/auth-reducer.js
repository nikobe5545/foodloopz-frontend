export const AuthActions = {
    LOGIN_CHECK: 'LOGIN_CHECK',
    LOGIN_CHECK_SUCCESS: 'LOGIN_CHECK_SUCCESS',
    LOGIN_REQUEST: 'LOGIN',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILURE: 'LOGIN_FAILURE',
    LOGOUT_REQUEST: 'LOGOUT_REQUEST'
};

export const authReducer = (state = {
    isFetching: false,
    email: null,
    roles: [],
    organization: null
}, action) => {
    switch (action.type) {
        case AuthActions.LOGIN_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case AuthActions.LOGIN_CHECK_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isFetching: false
            };
        case AuthActions.LOGIN_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isFetching: false
            };
        case AuthActions.LOGIN_FAILURE:
            return {
                ...state,
                ...action.payload,
                isFetching: false,
                errorMessage: action.errorMessage
            };
        default:
            return state;
    }

};