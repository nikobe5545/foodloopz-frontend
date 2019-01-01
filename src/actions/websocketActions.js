export const MAIN_ENDPOINT = 'ws://' + window.location.host + '/marketplace/api/ws/main';
export const EVENT_ENDPOINT = 'ws://' + window.location.host + '/marketplace/api/ws/event';

export const sendMessageToMainEndpoint = (type) => {
    let action = ({
        type,
        payload: {
            action: type
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