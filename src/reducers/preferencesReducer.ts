import { IPreferenceState, ActionTypes, UPDATE_PREFERENCE } from '../actions';

const initialState: IPreferenceState = {
  skinTone: '',
};

function preferencesReducer(state = initialState, action: ActionTypes): IPreferenceState {
  switch(action.type) {
    case UPDATE_PREFERENCE: {
      return {
        skinTone: state.skinTone,
      };
    }
    default:
      return state;
  }
};

export default preferencesReducer;
