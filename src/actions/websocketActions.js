export const MAIN_ENDPOINT = 'ws://' + window.location.host + '/marketplace/api/ws/main';
export const EVENT_ENDPOINT = 'ws://' + window.location.host + '/marketplace/api/ws/event';

export const sendMessageToMainEndpoint = (type, payload) => {
    let action = ({
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
    console.log('Action', action);
    return action;
};

export const sendMessageToEventEndpoint = (type, payload) => ({
    type,
    payload,
    meta: {
        socket: EVENT_ENDPOINT
    }
});