import $ from 'jquery'

export const LoopActions = {
  FETCH_LOOP: 'FETCH_LOOP',
  FETCH_LOOP_SUCCESS: 'FETCH_LOOP_SUCCESS',
  FETCH_LOOP_FAIL: 'FETCH_LOOP_FAIL',
  POST_LOOP: 'POST_LOOP',
  POST_LOOP_SUCCESS: 'POST_LOOP_SUCCESS',
  POST_LOOP_FAIL: 'POST_LOOP_FAIL'
}

export function fetchLoop (id) {
  return (dispatch, getStore) => {
    console.log('Fetch ad with id ' + id)
    dispatch(requestLoop())
    $.ajax({
      url: '/marketplace/api/rest/loops/' + id,
      type: 'GET',
      dataType: 'json'
    })
      .done((response) => {
        console.log('Loop fetch success', response)
        dispatch({
          type: LoopActions.FETCH_LOOP_SUCCESS,
          data: response
        }
        )
      })
      .fail((xhr, status, error) => {
        dispatch(fetchLoopError('Fetching ad failed', error))
      })
  }
}

function fetchLoopError (errorMessage, error) {
  return {
    type: LoopActions.FETCH_LOOP_FAIL,
    errorMessage,
    error
  }
}

function requestLoop () {
  return {type: LoopActions.FETCH_LOOP}
}

export function postLoop (data) {
  return (dispatch, getStore) => {
    console.log('Post loop', data)
    dispatch(requestPostLoop(data))
    const method = data.id ? 'PATCH' : 'POST'
    let url = '/marketplace/api/rest/loops/'
    if (data.id) {
      url = url + data.id + '/'
    }
    $.ajax({
      url: url,
      type: method,
      dataType: 'json',
      contentType: 'application/json; charset=UTF-8',
      data: JSON.stringify(data)
    })
      .done((response) => {
        console.log('Post loop success', response)
        dispatch({
          type: LoopActions.FETCH_LOOP_SUCCESS,
          data: response
        }
        )
      })
      .fail((xhr, status, error) => {
        dispatch(postLoopError('Posting loop failed', error))
      })
  }
}

function requestPostLoop (data) {
  return {
    type: LoopActions.POST_LOOP,
    data
  }
}

function postLoopError (errorMessage, error) {
  return {
    type: LoopActions.POST_LOOP_FAIL,
    errorMessage,
    error
  }
}
