export const Actions = {
    PUSH_TOP_ADS: 'PUSH_TOP_ADS',
    FETCH_TOP_ADS: 'FETCH_TOP_ADS'
};

export const homeReducer = (state = {
    topAds: {
        isFetching: false,
        didInvalidate: true,
        items: []
    }
}, action) => {
    switch (action.type) {
        case Actions.PUSH_TOP_ADS:
            console.log('Received data', action)
            return Object.assign({}, state, {
                topAds: {
                    isFetching: false,
                    didInvalidate: false,
                    lastUpdated: new Date().getTime(),
                    items: action.payload ? action.payload.payload : []
                }
            });
        case Actions.FETCH_TOP_ADS:
            return Object.assign({}, state, {
                topAds: {
                    isFetching: true,
                    didInvalidate: false,
                    items: []
                }
            });
        default:
            return state;
    }
};