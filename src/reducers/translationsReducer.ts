import { ITranslationState, ActionTypes, UPDATE_TRANSLATION, ITranslationDictionary } from '../actions';

const initialState: ITranslationState = {
  original: '',
  translated: '',
  dictionary: {},
};

function translationsReducer(state = initialState, action: ActionTypes): ITranslationState {
  switch(action.type) {
    case UPDATE_TRANSLATION: {
      const { original, translated } = action.payload
      const words = original.split(' ')

      return {
        original,
        translated,
        dictionary: words.reduce((acc: ITranslationDictionary, curr: string) => {
          acc[curr] = curr;

          return acc;
        }, {}),
      };
    }
    default:
      return state;
  }
};

export default translationsReducer;
