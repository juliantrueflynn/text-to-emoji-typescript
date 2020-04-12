import preferencesReducer from './preferencesReducer';
import { UPDATE_PREFERENCE } from '../actions';

it('responds to UPDATE_PREFERENCE', () => {
  const initialState = {
    skinTone: null,
  };
  const examplePayload = {
    skinTone: 1,
  };
  const result = preferencesReducer(initialState, {
    type: UPDATE_PREFERENCE,
    payload: examplePayload
  });

  expect(result).toMatchObject(examplePayload);
});

it('matches payload value', () => {
  const initialState = {
    skinTone: 1,
  };
  const examplePayload = {
    skinTone: 2,
  };
  const result = preferencesReducer(initialState, {
    type: UPDATE_PREFERENCE,
    payload: examplePayload
  });
  const expectedPayload = {
    skinTone: 2,
  };

  expect(result).toMatchObject(expectedPayload);
});
