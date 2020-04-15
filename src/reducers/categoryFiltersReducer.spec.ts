import categoryFiltersReducer from './categoryFiltersReducer';
import { UPDATE_CATEGORY_FILTER, Category } from '../actions';

it('responds to UPDATE_CATEGORY_FILTER', () => {
  const initialState = {
    category: null,
  };
  const examplePayload = {
    category: Category.smileysAndPeople,
  };
  const result = categoryFiltersReducer(initialState, {
    type: UPDATE_CATEGORY_FILTER,
    payload: examplePayload
  });

  expect(result).toMatchObject(examplePayload);
});
