import { combineReducers } from 'redux';
import revisionsReducer from './revisionsReducer';
import translationReducer from './translationReducer';
import preferencesReducer from './preferencesReducer';
import messageReducer from './messageReducer';

export default combineReducers({
  revisions: revisionsReducer,
  translation: translationReducer,
  preferences: preferencesReducer,
  message: messageReducer,
});
