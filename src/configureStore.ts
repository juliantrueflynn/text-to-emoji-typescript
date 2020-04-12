import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger'
import revisionsReducer from './reducers/revisionsReducer';
import translationReducer from './reducers/translationReducer';
import preferencesReducer from './reducers/preferencesReducer';
import messageReducer from './reducers/messageReducer';

export const rootReducer = combineReducers({
  revisions: revisionsReducer,
  translation: translationReducer,
  preferences: preferencesReducer,
  message: messageReducer,
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
