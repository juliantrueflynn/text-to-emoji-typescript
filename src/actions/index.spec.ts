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
  it('dispatches correct shape', () => {
    const payload = {
      category: actions.CategoryFilter.all,
    };
    const expectedAction = {
      type: actions.UPDATE_CATEGORY_FILTER,
      payload,
    };

    expect(actions.updateCategoryFilter(payload)).toMatchObject(expectedAction);
  });
});
