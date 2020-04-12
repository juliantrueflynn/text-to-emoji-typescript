import messageReducer from './messageReducer';
import { UPDATE_MESSAGE } from '../actions';

it('responds to UPDATE_MESSAGE', () => {
  const initialState = { content: '' };
  const examplePayload = {
    content: 'some message',
  };
  const result = messageReducer(initialState, {
    type: UPDATE_MESSAGE,
    payload: examplePayload
  });

  expect(result).toMatchObject(examplePayload);
});

it('sets :content property', () => {
  const newContent = 'foo bar foo';
  const initialState = { 'content': 'Some stale content.' };
  const result = messageReducer(initialState, {
    type: UPDATE_MESSAGE,
    payload: {
      content: newContent,
    }
  });

  expect(result).toMatchObject({ 'content': newContent });
});
