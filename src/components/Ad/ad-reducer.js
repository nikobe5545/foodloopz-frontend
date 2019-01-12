import {AdActions} from "./ad-actions";

export const adReducer = (state = {
    isFetching: false,
    isPosting: false,
    didInvalidate: true,
    item: null
}, action) => {
    switch (action.type) {
        case AdActions.FETCH_AD_SUCCESS:
            console.log('Received data', action)
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                lastUpdated: new Date().getTime(),
                item: action.data
            };
        case AdActions.FETCH_AD_FAIL:
            console.log('Fetch ad failed. Data = ', action);
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                item: null,
                errorMessage: action.errorMessage
            };
        case AdActions.FETCH_AD:
            return {
                ...state,
                isFetching: true,
                didInvalidate: false,
                item: null
            };
        case AdActions.POST_AD:
            return {
                ...state,
                isPosting: true,
                didInvalidate: false,
                item: action.data
            };
        case AdActions.POST_AD_SUCCESS:
            return {
                ...state,
                isPosting: false,
                didInvalidate: false,
                item: action.data
            };
        case AdActions.POST_AD_FAIL:
            return {
                ...state,
                isPosting: false,
                didInvalidate: false,
                errorMessage: action.errorMessage
            };
        default:
            return state;
    }
};