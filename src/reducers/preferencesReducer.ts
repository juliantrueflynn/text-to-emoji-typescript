import { IPreferenceState, ActionTypes, UPDATE_PREFERENCE } from '../actions';

const initialState: IPreferenceState = {
  skinTone: null,
};

function preferencesReducer(state = initialState, action: ActionTypes): IPreferenceState {
  switch(action.type) {
    case UPDATE_PREFERENCE: {
      return {
        skinTone: action.payload.skinTone,
      };
    }
    default:
      return state;
  }
};

export default preferencesReducer;
