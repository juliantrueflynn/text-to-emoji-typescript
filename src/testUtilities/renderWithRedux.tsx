import React from 'react';
import { createStore, Store, AnyAction } from 'redux';
import { Provider } from 'react-redux';
import { render, RenderOptions } from '@testing-library/react';
import rootReducer from '../reducers/rootReducer';

type RenderWithReduxOptions = RenderOptions & {
  store?: Store<{}, AnyAction>,
}

export function renderWithRedux(
  ui: React.ReactElement,
  options: RenderWithReduxOptions = {},
) {
  const store = options.store || createStore(rootReducer);

  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    // Adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store,
  };
}
