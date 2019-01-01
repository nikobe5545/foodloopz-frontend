import backoff from "backoff";


export function isOutgoingSocketMessage(action) {
    return Boolean(action && action.type && action.payload && action.meta.socket)
}

export function isIncomingSocketMessage(action) {
    return Boolean(action && action.meta && action.meta.incoming)
}

export function setBackoff(cb, failAfter = 6) {
    const bo = backoff.exponential({
        initialDelay: 1000
    })
    const doBackoff = bo.backoff.bind(bo)

    bo.on('ready', () => cb(doBackoff))

    bo.backoff()

    bo.failAfter(failAfter)
}
