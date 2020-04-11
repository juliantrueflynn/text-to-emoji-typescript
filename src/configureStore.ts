import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import revisionsReducer from './reducers/revisionsReducer';
import translationsReducer from './reducers/translationsReducer';
import preferencesReducer from './reducers/preferencesReducer';

const rootReducer = combineReducers({
  revisions: revisionsReducer,
  translations: translationsReducer,
  preferences: preferencesReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    compose(middleWareEnhancer),
  );

  return store;
};
