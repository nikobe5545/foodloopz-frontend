import $ from 'jquery'
import {LoopActions} from '../components/Loop/loop-actions'

export const LoopCategoryActions = {
  FETCH_LOOP_CATEGORIES: 'FETCH_LOOP_CATEGORIES',
  FETCH_LOOP_CATEGORIES_SUCCESS: 'FETCH_LOOP_CATEGORIES_SUCCESS',
  FETCH_LOOP_CATEGORIES_FAIL: 'FETCH_LOOP_CATEGORIES_FAIL'
}

export function fetchLoopCategories () {
  return (dispatch, getStore) => {
    console.log('Fetch loop categories')
    dispatch(requestLoopCategories())
    $.ajax({
      url: '/marketplace/api/rest/loop-categories',
      type: 'GET',
      dataType: 'json'
    })
      .done((response) => {
        console.log('Fetch loop categories success', response)
        dispatch({
          type: LoopCategoryActions.FETCH_LOOP_CATEGORIES_SUCCESS,
          data: response
        }
        )
      })
      .fail((xhr, status, error) => {
        dispatch(fetchLoopCategoriesError('Fetching loop categories failed', error))
      })
  }
}

function fetchLoopCategoriesError (errorMessage, error) {
  return {
    type: LoopCategoryActions.FETCH_LOOP_CATEGORIES_FAIL,
    errorMessage,
    error
  }
}

function requestLoopCategories () {
  return {type: LoopCategoryActions.FETCH_LOOP_CATEGORIES}
}
