import {LoopCategoryActions} from './loop-category-actions'

export const loopCategoriesReducer = (state = {
  isFetching: false,
  didInvalidate: true,
  items: null
}, action) => {
  switch (action.type) {
    case LoopCategoryActions.FETCH_LOOP_CATEGORIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        lastUpdated: new Date().getTime(),
        items: action.data
      }
    case LoopCategoryActions.FETCH_LOOP_CATEGORIES_FAIL:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: null,
        errorMessage: action.errorMessage
      }
    case LoopCategoryActions.FETCH_LOOP_CATEGORIES:
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
