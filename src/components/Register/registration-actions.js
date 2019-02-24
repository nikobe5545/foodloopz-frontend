import $ from 'jquery'

export const RegistrationActions = {
  POST_REGISTRATION: 'POST_REGISTRATION',
  POST_REGISTRATION_SUCCESS: 'POST_REGISTRATION_SUCCESS',
  POST_REGISTRATION_FAIL: 'POST_REGISTRATION_FAIL'
}

export function postRegistration (data) {
  return (dispatch, getStore) => {
    console.log('Post registration', data)
    dispatch(requestPostRegistration(data))
    let url = '/marketplace/api/rest/account/register'
    $.ajax({
      url: url,
      type: 'POST',
      dataType: 'json',
      contentType: 'application/json; charset=UTF-8',
      data: JSON.stringify(data)
    })
      .done((response) => {
        console.log('Post registration success', response)
        dispatch({
          type: RegistrationActions.POST_REGISTRATION_SUCCESS,
          data: response
        }
        )
      })
      .fail((xhr, status, error) => {
        dispatch(postRegistrationError('Posting registration failed', error))
      })
  }
}

function requestPostRegistration (data) {
  return {
    type: RegistrationActions.POST_REGISTRATION,
    data
  }
}

function postRegistrationError (errorMessage, error) {
  return {
    type: RegistrationActions.POST_REGISTRATION_FAIL,
    errorMessage,
    error
  }
}
