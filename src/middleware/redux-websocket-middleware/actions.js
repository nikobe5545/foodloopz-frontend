export const ActionTypes = {
    WEBSOCKET_CONNECTED: '@@redux-websocket/WEBSOCKET_CONNECTED',
    WEBSOCKET_DISCONNECTED: '@@redux-websocket/WEBSOCKET_DISCONNECTED',
    WEBSOCKET_ERROR: '@@redux-websocket/WEBSOCKET_ERROR',
    RECEIVED_WEBSOCKET_DATA: '@@redux-websocket/RECEIVED_WEBSOCKET_DATA',
    UNKNOWN_ACTION: '@@redux-websocket/RECEIVED_WEBSOCKET_DATA'
}

export function createConnectionAction(endpoint) {
    return {
        type: ActionTypes.WEBSOCKET_CONNECTED,
        meta: {socket: endpoint, incoming: true}
    }
}

export function createDisonnectionAction(endpoint, close) {
    return {
        type: ActionTypes.WEBSOCKET_DISCONNECTED,
        payload: close,
        meta: {socket: endpoint, incoming: true}
    }
}

export function createErrorAction(endpoint, error) {
    return {
        type: ActionTypes.WEBSOCKET_ERROR,
        payload: new Error(error),
        meta: {socket: endpoint, incoming: true, error: true}
    }
}

export function createMessageAction(endpoint, data) {
    const actionType = data.action ? data.action : ActionTypes.UNKNOWN_ACTION;
    return {
        type: actionType,
        payload: data,
        meta: {socket: endpoint, incoming: true}
    }
}
