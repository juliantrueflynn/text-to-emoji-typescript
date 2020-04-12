import * as actions from '.';

describe('undoRevision', () => {
  it('undoRevision dispatches correct shape', () => {
    const expectedAction = {
      type: actions.UNDO_REVISION,
    };

    expect(actions.undoRevision()).toMatchObject(expectedAction);
  });
});

describe('redoRevision', () => {
  it('redoRevision dispatches correct shape', () => {
    const expectedAction = {
      type: actions.REDO_REVISION,
    };

    expect(actions.redoRevision()).toMatchObject(expectedAction);
  });
});

describe('clearRevision', () => {
  it('clearRevision dispatches correct shape', () => {
    const expectedAction = {
      type: actions.CLEAR_REVISION,
    };

    expect(actions.clearRevision()).toMatchObject(expectedAction);
  });
});

describe('updateTranslation', () => {
  it('dispatches correct shape', () => {
    const payload = {
      original: 'some original message',
      translated: 'some translated message',
    };
    const expectedAction = {
      type: actions.UPDATE_TRANSLATION,
      payload,
    };

    expect(actions.updateTranslation(payload)).toMatchObject(expectedAction);
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
