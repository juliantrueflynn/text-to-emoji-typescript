import revisionsReducer from './revisionsReducer';
import { UNDO_REVISION, REDO_REVISION } from '../actions';

it('responds to UNDO_REVISION by subtracting by 1', () => {
  const initialState = {
    presentIndex: 1,
  };
  const result = revisionsReducer(initialState, {
    type: UNDO_REVISION,
  });
  const expectedState = {
    presentIndex: 0,
  };

  expect(result).toMatchObject(expectedState);
});

it('responds to REDO_REVISION by increasing by 1', () => {
  const initialState = {
    presentIndex: 0,
  };
  const result = revisionsReducer(initialState, {
    type: REDO_REVISION,
  });
  const expectedState = {
    presentIndex: 1,
  };

  expect(result).toMatchObject(expectedState);
});

it('does not go below 0 for :presentIndex', () => {
  const initialState = {
    presentIndex: 0,
  };
  const result = revisionsReducer(initialState, {
    type: UNDO_REVISION,
  });

  expect(result).toMatchObject(initialState);
});
