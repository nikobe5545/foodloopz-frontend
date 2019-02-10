import $ from 'jquery'
import {AdActions} from '../components/Ad/ad-actions'

export const AdCategoryActions = {
  FETCH_AD_CATEGORIES: 'FETCH_AD_CERTIFICATIONS',
  FETCH_AD_CATEGORIES_SUCCESS: 'FETCH_AD_CATEGORIES_SUCCESS',
  FETCH_AD_CATEGORIES_FAIL: 'FETCH_AD_CATEGORIES_FAIL'
}

export function fetchAdCategories () {
  return (dispatch, getStore) => {
    console.log('Fetch ad categories')
    dispatch(requestAdCategories())
    $.ajax({
      url: '/marketplace/api/rest/loop-categories',
      type: 'GET',
      dataType: 'json'
    })
      .done((response) => {
        console.log('Fetch ad categories success', response)
        dispatch({
          type: AdCategoryActions.FETCH_AD_CATEGORIES_SUCCESS,
          data: response
        }
        )
      })
      .fail((xhr, status, error) => {
        dispatch(fetchAdCategoriesError('Fetching ad categories failed', error))
      })
  }
}

function fetchAdCategoriesError (errorMessage, error) {
  return {
    type: AdCategoryActions.FETCH_AD_CATEGORIES_FAIL,
    errorMessage,
    error
  }
}

function requestAdCategories () {
  return {type: AdCategoryActions.FETCH_AD_CATEGORIES}
}
