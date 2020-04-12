import translationsReducer from './translationsReducer';
import { UPDATE_TRANSLATION } from '../actions';

it('responds to UPDATE_TRANSLATION', () => {
  const initialState = {
    original: '',
    translated: '',
    dictionary: {},
  };
  const examplePayload = {
    original: 'foobar',
    translated: 'foobar',
    dictionary: { 'foobar': 'foobar' },
  };
  const result = translationsReducer(initialState, {
    type: UPDATE_TRANSLATION,
    payload: examplePayload
  });

  expect(result).toMatchObject(examplePayload);
});

it('decorates :dictionary with :original value', () => {
  const initialState = {
    original: 'foobar',
    translated: 'foobar',
    dictionary: { 'foobar': 'foobar' },
  };
  const examplePayload = {
    original: 'foo bar foo',
    translated: 'foo bar foo',
    dictionary: {},
  };
  const result = translationsReducer(initialState, {
    type: UPDATE_TRANSLATION,
    payload: examplePayload
  });
  const expectedPayload = {
    original: 'foo bar foo',
    translated: 'foo bar foo',
    dictionary: {
      'foo': 'foo',
      'foobar': 'foobar',
    },
  };

  expect(result).toMatchObject(expectedPayload);
});

it('does not override earlier value with combination string', () => {
  const initialState = {
    original: 'foobar',
    translated: 'foobar',
    dictionary: { 'foobar': 'foobar' },
  };
  const examplePayload = {
    original: 'foo bar foo',
    translated: 'foo bar foo',
    dictionary: {},
  };
  const result = translationsReducer(initialState, {
    type: UPDATE_TRANSLATION,
    payload: examplePayload
  });
  const expectedPayload = {
    original: 'foo bar foo',
    translated: 'foo bar foo',
    dictionary: {
      'bar': 'bar',
      'foo': 'foo',
      'foobar': 'foobar',
    },
  };

  expect(result).toMatchObject(expectedPayload);
});
