export const AdActions = {
    FETCH_AD: 'AD',
    RECEIVE_AD_SUCCESS: 'RECEIVE_AD_SUCCESS',
    RECEIVE_AD_FAIL: 'RECEIVE_AD_FAIL'
};

export const adReducer = (state = {
    isFetching: false,
    didInvalidate: true,
    item: {}
}, action) => {
    switch (action.type) {
        case AdActions.RECEIVE_AD_SUCCESS:
            console.log('Received data', action)
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                lastUpdated: new Date().getTime(),
                item: action.payload.payload
            };
        case AdActions.RECEIVE_AD_FAIL:
            console.log('Fetch ad failed. Data = ', action);
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                item: null,
                errorMessage: action.payload.statusMessage
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