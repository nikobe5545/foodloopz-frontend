import {RegistrationActions} from './registration-actions'

export const registrationReducer = (state = {
  isPosting: false,
  registrationSuccess: false,
  registrationFail: false,
  item: null
}, action) => {
  switch (action.type) {
    case RegistrationActions.POST_REGISTRATION:
      return {
        ...state,
        isPosting: true,
        item: action.data
      }
    case RegistrationActions.POST_REGISTRATION_SUCCESS:
      return {
        ...state,
        isPosting: false,
        registrationSuccess: true,
        item: action.data
      }
    case RegistrationActions.POST_REGISTRATION_FAIL:
      return {
        ...state,
        isPosting: false,
        registrationFail: true,
        errorMessage: action.errorMessage
      }
    default:
      return state
  }
}
