import translationReducer from './translationReducer';
import { UPDATE_MESSAGE } from '../actions';

it('responds to UPDATE_MESSAGE', () => {
  const initialState = {
    content: '',
    codePointsDictionary: {},
  };
  const examplePayload = {
    content: 'foobar',
  };
  const result = translationReducer(initialState, {
    type: UPDATE_MESSAGE,
    payload: examplePayload,
  });
  const expectedState = {
    contentParts: ['foobar'],
    codePointsDictionary: {},
  };

  expect(result).toMatchObject(expectedState);
});

it('decorates with :contentParts value if matches emoji', () => {
  const initialState = {
    contentParts: ['foobar'],
    codePointsDictionary: {},
  };
  const examplePayload = {
    content: 'hi smiley',
  };
  const result = translationReducer(initialState, {
    type: UPDATE_MESSAGE,
    payload: examplePayload,
  });
  const expectedState = {
    contentParts: ['hi', 'smiley'],
    codePointsDictionary: {
      smiley: ['1f603', ':smiley:'],
    },
  };

  expect(result).toMatchObject(expectedState);
});

it('decorates with :contentParts and passes special characters', () => {
  const initialState = {
    contentParts: [],
    codePointsDictionary: {},
  };
  const examplePayload = {
    content: 'hi smiley.',
  };
  const result = translationReducer(initialState, {
    type: UPDATE_MESSAGE,
    payload: examplePayload,
  });
  const expectedState = {
    contentParts: ['hi', 'smiley.'],
    codePointsDictionary: {
      'smiley.': ['1f603', ':smiley:'],
    },
  };

  expect(result).toMatchObject(expectedState);
});
