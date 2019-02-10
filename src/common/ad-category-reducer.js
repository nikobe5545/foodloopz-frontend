import {AdCategoryActions} from './ad-category-actions'

export const adCategoriesReducer = (state = {
  isFetching: false,
  didInvalidate: true,
  items: null
}, action) => {
  switch (action.type) {
    case AdCategoryActions.FETCH_AD_CATEGORIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        lastUpdated: new Date().getTime(),
        items: action.data
      }
    case AdCategoryActions.FETCH_AD_CATEGORIES_FAIL:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: null,
        errorMessage: action.errorMessage
      }
    case AdCategoryActions.FETCH_AD_CATEGORIES:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false,
        items: null
      }
    default:
      return state
  }
}
