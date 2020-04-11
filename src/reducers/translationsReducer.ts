import { ITranslationState, ActionTypes, UPDATE_TRANSLATION } from '../actions';

const initialState: ITranslationState = {
  originalMessage: '',
  translatedMessage: '',
};

function translationsReducer(state = initialState, action: ActionTypes): ITranslationState {
  switch(action.type) {
    case UPDATE_TRANSLATION: {
      return {
        originalMessage: state.originalMessage,
        translatedMessage: state.translatedMessage,
      };
    }
    default:
      return state;
  }
};

export default translationsReducer;
