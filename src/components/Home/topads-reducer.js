export const TopAdsActions = {
    FETCH_TOP_ADS: 'TOP_ADS',
    RECEIVE_TOP_ADS_SUCCESS: 'RECEIVE_TOP_ADS_SUCCESS',
    RECEIVE_TOP_ADS_FAIL: 'RECEIVE_TOP_ADS_FAIL'
};

export const topAdsReducer = (state = {
    topAds: {
        isFetching: false,
        didInvalidate: true,
        items: []
    }
}, action) => {
    switch (action.type) {
        case TopAdsActions.RECEIVE_TOP_ADS_SUCCESS:
            console.log('Received data', action)
            return {
                ...state,
                topAds: {
                    isFetching: false,
                    didInvalidate: false,
                    lastUpdated: new Date().getTime(),
                    items: action.payload ? action.payload.payload : []
                }
            };
        case TopAdsActions.RECEIVE_TOP_ADS_FAIL:
            console.warn('Failed to receive top ads. Action = ', action)
            return {
                ...state,
                topAds: {
                    isFetching: false,
                    didInvalidate: false,
                    items: [],
                    errorMessage: action.payload.statusMessage
                }
            };
        case TopAdsActions.FETCH_TOP_ADS:
            return {
                ...state,
                topAds: {
                    isFetching: true,
                    didInvalidate: false,
                    items: []
                }
            };
        default:
            return state;
    }
};