import React from 'react';
import { createStore, Store, AnyAction, Action } from 'redux';
import { Provider } from 'react-redux';
import { render, RenderResult } from '@testing-library/react';
import { rootReducer } from '../configureStore';

interface IReduxOptions {
  store?: Store<{}, AnyAction>;
}

interface IRenderWithRedux<S = any, A extends Action = AnyAction> {
  (
    ui: React.ReactElement<any>,
    reduxOptions?: IReduxOptions
  ): RenderResult & IReduxOptions
}

export const renderWithRedux: IRenderWithRedux = (
  ui,
  options = {},
) => {
  const store = options.store || createStore(rootReducer);

  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    // Adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store,
  };
}
