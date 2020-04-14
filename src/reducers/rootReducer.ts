import { combineReducers } from 'redux';
import translationReducer from './translationReducer';
import preferencesReducer from './preferencesReducer';
import messageReducer from './messageReducer';

export default combineReducers({
  translation: translationReducer,
  preferences: preferencesReducer,
  message: messageReducer,
});
