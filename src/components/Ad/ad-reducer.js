import {AdActions} from "./ad-actions";

export const adReducer = (state = {
    isFetching: false,
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
            }
        case AdActions.FETCH_AD:
            return {
                ...state,
                isFetching: true,
                didInvalidate: false,
                item: null
            }
        default:
            return state;
    }
};