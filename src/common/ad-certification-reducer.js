import {AdCertificationActions} from './ad-certification-actions'

export const adCertificationReducer = (state = {
  isFetching: false,
  didInvalidate: true,
  items: null
}, action) => {
  switch (action.type) {
    case AdCertificationActions.FETCH_AD_CERTIFICATIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        lastUpdated: new Date().getTime(),
        items: action.data
      }
    case AdCertificationActions.FETCH_AD_CERTIFICATIONS_FAIL:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: null,
        errorMessage: action.errorMessage
      }
    case AdCertificationActions.FETCH_AD_CERTIFICATIONS:
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
