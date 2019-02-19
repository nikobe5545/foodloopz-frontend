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
    dispatch(requestPostOrganization(data))
    let url = '/marketplace/api/rest/account/register'
    $.ajax({
      url: url,
      type: 'POST',
      dataType: 'json',
      contentType: 'application/json; charset=UTF-8',
      data: JSON.stringify(data)
    })
      .done((response) => {
        console.log('Post organization success', response)
        dispatch({
          type: OrganizationActions.POST_ORGANIZATION_SUCCESS,
          data: response
        }
        )
      })
      .fail((xhr, status, error) => {
        dispatch(postOrganizationError('Posting organization failed', error))
      })
  }
}

function requestPostOrganization (data) {
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
