export const Actions = {
    FETCH_AD: 'FETCH_AD',
    PUSH_AD: 'PUSH_AD'
};

export const adReducer = (state = {
    isFetching: false,
    didInvalidate: true,
    item: {}
}, action) => {
    switch (action.type) {
        case Actions.PUSH_AD:
            console.log('Received data', action)
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                lastUpdated: new Date().getTime(),
                item: action.payload.payload
            });
        case Actions.FETCH_AD:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false,
                item: null
            });
        default:
            return state;
    }
};