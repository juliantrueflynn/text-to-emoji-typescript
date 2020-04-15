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

describe('updateCategoryFilter', () => {
  it('allows to be set null', () => {
    const payload = {
      category: null,
    };
    const expectedAction = {
      type: actions.UPDATE_CATEGORY_FILTER,
      payload,
    };

    expect(actions.updateCategoryFilter(payload)).toMatchObject(expectedAction);
  });

  it('sets value based on enum', () => {
    const payload = {
      category: actions.Category.animalsAndNature,
    };
    const expectedAction = {
      type: actions.UPDATE_CATEGORY_FILTER,
      payload,
    };

    expect(actions.updateCategoryFilter(payload)).toMatchObject(expectedAction);
  });
});
