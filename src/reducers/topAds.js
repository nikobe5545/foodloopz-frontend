export const Actions = {
    PUSH_TOP_ADS: 'PUSH_TOP_ADS',
    FETCH_TOP_ADS: 'FETCH_TOP_ADS'
};

export const topAds = (state = {
    isFetching: false,
    didInvalidate: true,
    items: []
}, action) => {
    switch (action.type) {
        case Actions.PUSH_TOP_ADS:
            console.log('Received data', action)
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                lastUpdated: new Date().getTime(),
                items: JSON.parse(action.payload.payload)
            });
        case Actions.FETCH_TOP_ADS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false,
                items: []
            });
        default:
            return state;
    }
};