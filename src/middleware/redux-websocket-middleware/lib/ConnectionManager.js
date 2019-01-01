import {createConnectionAction, createDisonnectionAction, createErrorAction, createMessageAction} from '../actions'

import {Connection, MessageQueue} from './'

export default class ConnectionManager {
    constructor(store, options = {}) {
        this.store = store
        this.options = options
        this.storage = {}

        if (this.options.defaultEndpoint) {
            this.add(this.options.defaultEndpoint)
        }
    }

    add(endpoint, reconnectCallback = null) {
        const connection = new Connection(
            endpoint,
            this.store,
            new MessageQueue(),
            this.options.codec,
            reconnectCallback
        ).subscribe({
            onOpen: () => {
                this.store.dispatch(createConnectionAction(endpoint))
            },
            onMessage: data => {
                this.store.dispatch(createMessageAction(endpoint, data))
            },
            onClose: close => {
                this.store.dispatch(createDisonnectionAction(endpoint, close))
            },
            onError: error => {
                this.store.dispatch(createErrorAction(endpoint, error))
            }
        })

        this.storage[endpoint] = connection

        return connection
    }

    get(endpoint) {
        return this.storage[endpoint]
    }

    has(endpoint) {
        return this.storage[endpoint] !== undefined
    }

    remove(endpoint) {
        let s = Object.assign({}, this.storage)
        delete s[endpoint]
        this.storage = s
    }
}
