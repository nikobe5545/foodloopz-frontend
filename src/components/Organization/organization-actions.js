import $ from 'jquery'

export const OrganizationActions = {
  FETCH_ORGANIZATION: 'FETCH_ORGANIZATION',
  FETCH_ORGANIZATION_SUCCESS: 'FETCH_ORGANIZATION_SUCCESS',
  FETCH_ORGANIZATION_FAIL: 'FETCH_ORGANIZATION_FAIL',
  POST_ORGANIZATION: 'POST_ORGANIZATION',
  POST_ORGANIZATION_SUCCESS: 'POST_ORGANIZATION_SUCCESS',
  POST_ORGANIZATION_FAIL: 'POST_ORGANIZATION_FAIL'
}

export function fetchOrganization (id) {
  return (dispatch, getStore) => {
    console.log('Fetch org with id ' + id)
    dispatch(requestOrganization())
    $.ajax({
      url: '/marketplace/api/rest/organizations/' + id,
      type: 'GET',
      dataType: 'json'
    })
      .done((response) => {
        console.log('Loop fetch success', response)
        dispatch({
          type: OrganizationActions.FETCH_ORGANIZATION_SUCCESS,
          data: response
        }
        )
      })
      .fail((xhr, status, error) => {
        dispatch(fetchOrganizationError('Fetching organization failed', error))
      })
  }
}

function fetchOrganizationError (errorMessage, error) {
  return {
    type: OrganizationActions.FETCH_ORGANIZATION_FAIL,
    errorMessage,
    error
  }
}

function requestOrganization () {
  return {type: OrganizationActions.FETCH_ORGANIZATION}
}

export function postOrganization (data) {
  return (dispatch, getStore) => {
    console.log('Post organization', data)
    dispatch(requestPostAd(data))
    const method = data.id ? 'PATCH' : 'POST'
    let url = '/marketplace/api/rest/organizations/'
    if (data.id) {
      url = url + data.id + '/'
    }
    $.ajax({
      url: url,
      type: method,
      dataType: 'json',
      data
    })
      .done((response) => {
        console.log('Post organization success', response)
        dispatch({
          type: OrganizationActions.FETCH_ORGANIZATION_SUCCESS,
          data: response
        }
        )
      })
      .fail((xhr, status, error) => {
        dispatch(postOrganizationError('Posting organization failed', error))
      })
  }
}

function requestPostAd (data) {
  return {
    type: OrganizationActions.POST_ORGANIZATION,
    data
  }
}

function postOrganizationError (errorMessage, error) {
  return {
    type: OrganizationActions.POST_ORGANIZATION_FAIL,
    errorMessage,
    error
  }
}
