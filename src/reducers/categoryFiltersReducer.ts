import { ActionTypes, UPDATE_CATEGORY_FILTER, Category, CategoryFilter } from '../actions';

type CategoryFilterStateProps = {
  category: CategoryFilter;
}

const initialState: CategoryFilterStateProps = {
  category: null,
};

function categoryFiltersReducer(state = initialState, action: ActionTypes): CategoryFilterStateProps {
  switch(action.type) {
    case UPDATE_CATEGORY_FILTER: {
      const { payload } = action;
      const category = Category.all === payload.category ? null : payload.category;

      return { category };
    }
    default:
      return state;
  }
};

export default categoryFiltersReducer;
