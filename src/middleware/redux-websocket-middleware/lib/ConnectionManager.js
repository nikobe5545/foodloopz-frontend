import {
  defaultCreateConnectionAction,
  defaultCreateDisonnectionAction,
  defaultCreateErrorAction,
  defaultCreateMessageAction
} from '../actions'

import {Connection, MessageQueue} from './'

export default class ConnectionManager {
  constructor (store, options = {}) {
    this.store = store
    this.options = options
    this.storage = {}
    this.onOpenAction = options.onOpenAction
      ? options.onOpenAction : defaultCreateConnectionAction
    this.onMessageAction = options.onMessageAction
      ? options.onMessageAction : defaultCreateMessageAction
    this.onCloseAction = options.onCloseAction
      ? options.onCloseAction : defaultCreateDisonnectionAction
    this.onErrorAction = options.onErrorAction
      ? options.onErrorAction : defaultCreateErrorAction

    if (this.options.defaultEndpoint) {
      this.add(this.options.defaultEndpoint)
    }
  }

  add (endpoint, reconnectCallback = null) {
    const connection = new Connection(
      endpoint,
      this.store,
      new MessageQueue(),
      this.options.codec,
      reconnectCallback
    ).subscribe({
      onOpen: () => {
        this.store.dispatch(this.onOpenAction(endpoint))
      },
      onMessage: data => {
        this.store.dispatch(this.onMessageAction(endpoint, data))
      },
      onClose: close => {
        this.store.dispatch(this.onCloseAction(endpoint, close))
      },
      onError: error => {
        this.store.dispatch(this.onErrorAction(endpoint, error))
      }
    })

    this.storage[endpoint] = connection

    return connection
  }

  get (endpoint) {
    return this.storage[endpoint]
  }

  has (endpoint) {
    return this.storage[endpoint] !== undefined
  }

  remove (endpoint) {
    let s = Object.assign({}, this.storage)
    delete s[endpoint]
    this.storage = s
  }
}
