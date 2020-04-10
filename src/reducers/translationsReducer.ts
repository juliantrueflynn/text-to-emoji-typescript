import { ITranslationState, TranslationTypes } from '../types';

const initialState: ITranslationState = {
  originalMessage: '',
  translatedMessage: '',
};

function translationsReducer(state = initialState, action: TranslationTypes): ITranslationState {
  switch(action.type) {
    case 'UPDATE_TRANSLATION':
      return state;
    default:
      return state;
  }
};

export default translationsReducer;
