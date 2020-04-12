import translationsReducer from './translationsReducer';
import { UPDATE_MESSAGE } from '../actions';

it('responds to UPDATE_MESSAGE', () => {
  const initialState = {};
  const examplePayload = {
    'content': 'foobar'
  };
  const result = translationsReducer(initialState, {
    type: UPDATE_MESSAGE,
    payload: examplePayload
  });
  const expectedState = {
    'foobar': 'foobar',
  };

  expect(result).toMatchObject(expectedState);
});

it('decorates with :content value', () => {
  const initialState = { 'foo': 'foo' };
  const examplePayload = {
    content: 'foo bar foo',
  };
  const result = translationsReducer(initialState, {
    type: UPDATE_MESSAGE,
    payload: examplePayload
  });
  const expectedState = {
    'foo': 'foo',
    'foo bar': 'foo bar',
  };

  expect(result).toMatchObject(expectedState);
});

it('does not override earlier value with combination string', () => {
  const initialState = { 'foobar': 'foobar' };
  const examplePayload = {
    content: 'foo bar foo',
  };
  const result = translationsReducer(initialState, {
    type: UPDATE_MESSAGE,
    payload: examplePayload
  });
  const expectedState = {
    'bar': 'bar',
    'foo': 'foo',
    'foo bar': 'foo bar',
  };

  expect(result).toMatchObject(expectedState);
});
