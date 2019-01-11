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