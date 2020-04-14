import * as actions from '.';

describe('updateMessage', () => {
  it('dispatches correct shape', () => {
    const payload = {
      content: 'some original message',
    };
    const expectedAction = {
      type: actions.UPDATE_MESSAGE,
      payload,
    };

    expect(actions.updateMessage(payload)).toMatchObject(expectedAction);
  });
});

describe('updatePreference', () => {
  it('dispatches correct shape', () => {
    const payload = {
      skinTone: 1,
    };
    const expectedAction = {
      type: actions.UPDATE_PREFERENCE,
      payload,
    };

    expect(actions.updatePreference(payload)).toMatchObject(expectedAction);
  });

  it('allows null value for :skinTone', () => {
    const payload = {
      skinTone: null,
    };
    const expectedAction = {
      type: actions.UPDATE_PREFERENCE,
      payload,
    };

    expect(actions.updatePreference(payload)).toMatchObject(expectedAction);
  });
});
