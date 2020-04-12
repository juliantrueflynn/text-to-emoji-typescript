import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger'
import revisionsReducer from './reducers/revisionsReducer';
import translationsReducer from './reducers/translationsReducer';
import preferencesReducer from './reducers/preferencesReducer';

export const rootReducer = combineReducers({
  revisions: revisionsReducer,
  translations: translationsReducer,
  preferences: preferencesReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const middlewares = [];
  middlewares.push(thunkMiddleware);

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(createLogger());
  }

  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    compose(middleWareEnhancer),
  );

  return store;
};
