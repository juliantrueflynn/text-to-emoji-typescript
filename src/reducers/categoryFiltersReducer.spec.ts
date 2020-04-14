import categoryFiltersReducer from './categoryFiltersReducer';
import { UPDATE_CATEGORY_FILTER, CategoryFilter } from '../actions';

it('responds to UPDATE_CATEGORY_FILTER', () => {
  const initialState = {
    category: CategoryFilter.all,
  };
  const examplePayload = {
    category: CategoryFilter.smileysAndPeople,
  };
  const result = categoryFiltersReducer(initialState, {
    type: UPDATE_CATEGORY_FILTER,
    payload: examplePayload
  });

  expect(result).toMatchObject(examplePayload);
});
