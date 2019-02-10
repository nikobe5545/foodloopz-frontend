import {LoopCertificationActions} from './loop-certification-actions'

export const loopCertificationReducer = (state = {
  isFetching: false,
  didInvalidate: true,
  items: null
}, action) => {
  switch (action.type) {
    case LoopCertificationActions.FETCH_LOOP_CERTIFICATIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        lastUpdated: new Date().getTime(),
        items: action.data
      }
    case LoopCertificationActions.FETCH_LOOP_CERTIFICATIONS_FAIL:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: null,
        errorMessage: action.errorMessage
      }
    case LoopCertificationActions.FETCH_LOOP_CERTIFICATIONS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false,
        items: null
      }
    default:
      return state
  }
}
