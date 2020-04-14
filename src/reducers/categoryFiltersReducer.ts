import { ICategoryFilterState, ActionTypes, UPDATE_CATEGORY_FILTER, CategoryFilter } from '../actions';

const initialState: ICategoryFilterState = {
  category: CategoryFilter.all,
};

function categoryFiltersReducer(state = initialState, action: ActionTypes): ICategoryFilterState {
  switch(action.type) {
    case UPDATE_CATEGORY_FILTER: {
      return {
        category: action.payload.category,
      };
    }
    default:
      return state;
  }
};

export default categoryFiltersReducer;
