import $ from 'jquery'

export const TopAdsActions = {
  FETCH_TOP_ADS: 'FETCH_TOP_ADS',
  FETCH_TOP_ADS_SUCCESS: 'FETCH_TOP_ADS_SUCCESS',
  FETCH_TOP_ADS_FAIL: 'FETCH_TOP_ADS_FAIL'
}

export function fetchTopAds () {
  return (dispatch, getStore) => {
    console.log('Fetch topads')
    dispatch(requestTopAds())
    $.ajax({
      url: '/marketplace/api/rest/ads/top-ads',
      type: 'GET',
      dataType: 'json'
    })
      .done((response) => {
        console.log('Topads fetch success', response)
        dispatch({
          type: TopAdsActions.FETCH_TOP_ADS_SUCCESS,
          data: response
        }
        )
      })
      .fail((xhr, status, error) => {
        dispatch(fetchTopAdsError('Fetching top ads failed', error))
      })
  }
}

export function fetchTopAdsError (errorMessage, error) {
  return {
    type: TopAdsActions.FETCH_TOP_ADS_FAIL,
    errorMessage,
    error
  }
}

function requestTopAds () {
  return {type: TopAdsActions.FETCH_TOP_ADS}
}
