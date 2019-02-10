import {OrganizationActions} from './organization-actions'

export const organizationReducer = (state = {
  isFetching: false,
  isPosting: false,
  didInvalidate: true,
  item: null
}, action) => {
  switch (action.type) {
    case OrganizationActions.FETCH_ORGANIZATION_SUCCESS:
      console.log('Received data', action)
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        lastUpdated: new Date().getTime(),
        item: action.data
      }
    case OrganizationActions.FETCH_ORGANIZATION_FAIL:
      console.log('Fetch organization failed. Data = ', action)
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        item: null,
        errorMessage: action.errorMessage
      }
    case OrganizationActions.FETCH_ORGANIZATION:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false,
        item: null
      }
    case OrganizationActions.POST_ORGANIZATION:
      return {
        ...state,
        isPosting: true,
        didInvalidate: false,
        item: action.data
      }
    case OrganizationActions.POST_ORGANIZATION_SUCCESS:
      return {
        ...state,
        isPosting: false,
        didInvalidate: false,
        item: action.data
      }
    case OrganizationActions.POST_ORGANIZATION_FAIL:
      return {
        ...state,
        isPosting: false,
        didInvalidate: false,
        errorMessage: action.errorMessage
      }
    default:
      return state
  }
}
