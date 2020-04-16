import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers/rootReducer';

export type AppState = ReturnType<typeof rootReducer>;

const middlewares = [];
middlewares.push(thunkMiddleware);

if (process.env.NODE_ENV === 'development') {
  middlewares.push(createLogger());
}

const middleWareEnhancer = applyMiddleware(...middlewares);
const store = createStore(rootReducer, compose(middleWareEnhancer));

export default store;
