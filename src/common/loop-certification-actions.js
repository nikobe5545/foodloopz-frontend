import $ from 'jquery'

export const LoopCertificationActions = {
  FETCH_LOOP_CERTIFICATIONS: 'FETCH_LOOP_CERTIFICATIONS',
  FETCH_LOOP_CERTIFICATIONS_SUCCESS: 'FETCH_LOOP_CERTIFICATIONS_SUCCESS',
  FETCH_LOOP_CERTIFICATIONS_FAIL: 'FETCH_LOOP_CERTIFICATIONS_FAIL'
}

export function fetchLoopCertifications () {
  return (dispatch, getStore) => {
    console.log('Fetch loop certifications')
    dispatch(requestLoopCertifications())
    $.ajax({
      url: '/marketplace/api/rest/loop-certifications',
      type: 'GET',
      dataType: 'json'
    })
      .done((response) => {
        console.log('Fetch loop certifications success', response)
        dispatch({
          type: LoopCertificationActions.FETCH_LOOP_CERTIFICATIONS_SUCCESS,
          data: response
        }
        )
      })
      .fail((xhr, status, error) => {
        dispatch(fetchLoopCategoriesError('Fetching loop certifications failed', error))
      })
  }
}

function fetchLoopCategoriesError (errorMessage, error) {
  return {
    type: LoopCertificationActions.FETCH_LOOP_CERTIFICATIONS_FAIL,
    errorMessage,
    error
  }
}

function requestLoopCertifications () {
  return {type: LoopCertificationActions.FETCH_LOOP_CERTIFICATIONS}
}
