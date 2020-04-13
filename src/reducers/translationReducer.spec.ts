import translationReducer from './translationReducer';
import { UPDATE_MESSAGE } from '../actions';

it('responds to UPDATE_MESSAGE', () => {
  const initialState = {
    content: '',
    codePointsDictionary: {},
  };
  const examplePayload = {
    content: 'foobar'
  };
  const result = translationReducer(initialState, {
    type: UPDATE_MESSAGE,
    payload: examplePayload
  });
  const expectedState = {
    contentParts: ['foobar'],
    codePointsDictionary: { 'foobar': 'foobar' },
  };

  expect(result).toMatchObject(expectedState);
});

it('decorates with :content value', () => {
  const initialState = {
    contentParts: ['foo'],
    codePointsDictionary: {},
  };
  const examplePayload = {
    content: 'foo bar foo',
  };
  const result = translationReducer(initialState, {
    type: UPDATE_MESSAGE,
    payload: examplePayload
  });
  const expectedState = {
    contentParts: ['foo', 'bar', 'foo'],
    codePointsDictionary: {
      'foo': 'foo',
      'bar': 'bar',
    }
  };

  expect(result).toMatchObject(expectedState);
});

it('does not override earlier value with combination string', () => {
  const initialState = {
    contentParts: ['foobar'],
    codePointsDictionary: { 'foo': 'foo' },
  };
  const examplePayload = {
    content: 'foo bar foo',
  };
  const result = translationReducer(initialState, {
    type: UPDATE_MESSAGE,
    payload: examplePayload
  });
  const expectedState = {
    contentParts: ['foo', 'bar', 'foo'],
    codePointsDictionary: {
      'bar': 'bar',
      'foo': 'foo',
      'foo bar': 'foo bar',
    },
  };

  expect(result).toMatchObject(expectedState);
});
