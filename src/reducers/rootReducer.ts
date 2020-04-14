import { combineReducers } from 'redux';
import translationReducer from './translationReducer';
import categoryFiltersReducer from './categoryFiltersReducer';
import messageReducer from './messageReducer';

export default combineReducers({
  translation: translationReducer,
  preferences: categoryFiltersReducer,
  message: messageReducer,
});
