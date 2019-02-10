import {LoopActions} from './loop-actions'

export const loopReducer = (state = {
  isFetching: false,
  isPosting: false,
  didInvalidate: true,
  item: null
}, action) => {
  switch (action.type) {
    case LoopActions.FETCH_LOOP_SUCCESS:
      console.log('Received data', action)
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        lastUpdated: new Date().getTime(),
        item: action.data
      }
    case LoopActions.FETCH_LOOP_FAIL:
      console.log('Fetch ad failed. Data = ', action)
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        item: null,
        errorMessage: action.errorMessage
      }
    case LoopActions.FETCH_LOOP:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false,
        item: null
      }
    case LoopActions.POST_LOOP:
      return {
        ...state,
        isPosting: true,
        didInvalidate: false,
        item: action.data
      }
    case LoopActions.POST_LOOP_SUCCESS:
      return {
        ...state,
        isPosting: false,
        didInvalidate: false,
        item: action.data
      }
    case LoopActions.POST_LOOP_FAIL:
      return {
        ...state,
        isPosting: false,
        didInvalidate: false,
        errorMessage: action.errorMessage
      }
    default:
      return state
  }
}
