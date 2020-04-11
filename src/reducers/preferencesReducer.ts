import { IPreferenceState, PreferenceTypes } from '../types';

const initialState: IPreferenceState = {
  skinTone: '',
};

function preferencesReducer(state = initialState, action: PreferenceTypes): IPreferenceState {
  switch(action.type) {
    case 'UPDATE_PREFERENCE':
      return state;
    default:
      return state;
  }
};

export default preferencesReducer;
