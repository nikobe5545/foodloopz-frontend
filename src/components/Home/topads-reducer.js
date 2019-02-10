import {TopAdsActions} from './topads-actions'

export const topAdsReducer = (state = {
  topAds: {
    isFetching: false,
    didInvalidate: true,
    items: []
  }
}, action) => {
  switch (action.type) {
    case TopAdsActions.FETCH_TOP_ADS_SUCCESS:
      console.log('Received data', action)
      return {
        ...state,
        topAds: {
          isFetching: false,
          didInvalidate: false,
          lastUpdated: new Date().getTime(),
          items: action.data ? action.data : []
        }
      }
    case TopAdsActions.FETCH_TOP_ADS_FAIL:
      console.warn('Failed to receive top ads. Action = ', action)
      return {
        ...state,
        topAds: {
          isFetching: false,
          didInvalidate: false,
          items: [],
          errorMessage: action.errorMessage + action.error
        }
      }
    case TopAdsActions.FETCH_TOP_ADS:
      return {
        ...state,
        topAds: {
          isFetching: true,
          didInvalidate: false,
          items: []
        }
      }
    default:
      return state
  }
}
