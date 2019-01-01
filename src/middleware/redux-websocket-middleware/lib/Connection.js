import {setBackoff} from '../utils'
import MessageQueue from './MessageQueue'
import {JSONCodec} from './Codecs'

export default class Connection {
    constructor(
        endpoint,
        store,
        queue = new MessageQueue(),
        codec = JSONCodec,
        reconnectCallback = null,
        Socket = window.WebSocket
    ) {
        this.queue = queue
        this.endpoint = endpoint
        this.backingOff = false
        this.store = store
        this.codec = codec
        this.Socket = Socket
        this.reconnectCallback = reconnectCallback
    }

    subscribe({onMessage, onOpen, onError, onClose}) {
        this.connection = new this.Socket(this.endpoint)

        this.handlers = {
            onMessage,
            onOpen,
            onError,
            onClose
        }

        Object.assign(this.connection, {
            onopen: this._onOpen.bind(this),
            onerror: this._onError.bind(this),
            onmessage: this._onMessage.bind(this),
            onclose: this._onClose.bind(this)
        })

        return this
    }

    unsubscribe() {
        this.connection.close()
    }

    isConnected() {
        return this.connection.readyState === WebSocket.OPEN
    }

    isClosed() {
        return this.connection.readyState === WebSocket.CLOSED
    }

    send(data, enqueueOnce = false) {
        if (this.isConnected()) {
            this.connection.send(this.codec.encode(data))
        } else {
            this.queue.enqeue(data, enqueueOnce)
            if (this.isClosed()) {
                this.subscribe(this.handlers)
            }
        }
    }

    _onOpen() {
        while (!this.queue.empty() && this.isConnected()) {
            this.send(this.queue.dequeue())
        }

        this.handlers.onOpen()
    }

    _onMessage(event) {
        this.handlers.onMessage(this.codec.decode(event.data))
    }

    _onError(err) {
        this.handlers.onError(err)
        this._startBackingOff()
    }

    _onClose(close) {
        this.handlers.onClose(close)
        if (this.reconnectCallback !== null) {
            this.reconnectCallback(this.store, close)
        } else {
            this._startBackingOff()
        }
    }

    _startBackingOff() {
        if (!this.backingOff) {
            this.backingOff = true

            setBackoff(nextBackOff => {
                if (!this.isConnected()) {
                    this.subscribe(this.handlers)
                    nextBackOff()
                } else {
                    this.backingOff = false
                }
            })
        }
    }
}
