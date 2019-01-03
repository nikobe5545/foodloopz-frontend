import {TopAdsActions} from "../components/Home/topads-reducer";
import {AdActions} from "../components/Ad/ad-reducer";
import {AuthActions} from "../components/Header/auth-reducer";

export const MAIN_ENDPOINT = 'ws://' + window.location.host + '/marketplace/api/ws/main';
export const EVENT_ENDPOINT = 'ws://' + window.location.host + '/marketplace/api/ws/event';

export const sendMessageToMainEndpoint = (type, payload) => {
    console.log('Sending websocket message', type, payload);
    return ({
        type,
        payload: {
            action: type,
            payload
        },
        meta: {
            socket: MAIN_ENDPOINT,
            enqueueOnce: true
        }
    });
};

export const sendMessageToEventEndpoint = (type, payload) => ({
    type,
    payload,
    meta: {
        socket: EVENT_ENDPOINT
    }
});

export const createOnMessageAction = (endpoint, data) => {
    let type = null;
    switch(data.action) {
        case TopAdsActions.FETCH_TOP_ADS:
            type = data.status === 'OK' ? TopAdsActions.RECEIVE_TOP_ADS_SUCCESS : TopAdsActions.RECEIVE_TOP_ADS_FAIL;
            break;
        case AdActions.FETCH_AD:
            type = data.status === 'OK' ? AdActions.RECEIVE_AD_SUCCESS : AdActions.RECEIVE_AD_FAIL;
            break;
        case AuthActions.LOGIN_REQUEST:
            type = data.status === 'OK' ? AuthActions.LOGIN_SUCCESS : AuthActions.LOGIN_FAILURE;
            break;
        default:
            type = 'WEBSOCKET_RECEIVED';
    }
    return {
        type,
        payload: data,
        meta: {socket: endpoint, incoming: true}
    };
};