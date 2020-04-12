import { ITranslationState, ActionTypes, UPDATE_TRANSLATION, ITranslationDictionary } from '../actions';

const initialState: ITranslationState = {
  original: '',
  translated: '',
  dictionary: {},
};

const getDictionaryFromMessage = (previousDictionary: ITranslationDictionary, words: string[]) =>
  words.reduce((acc: ITranslationDictionary, curr: string, index: number) => {
    if (curr) {
      const nextWord = words[index + 1];
      const combinationWord = curr + words[index + 1]
      acc[curr] = curr;

      if (curr && nextWord && !combinationWord) {
        acc[combinationWord] = `${curr} ${words[index + 1]}`;
      }
    }

    return acc;
  }, previousDictionary)

function translationsReducer(state = initialState, action: ActionTypes): ITranslationState {
  switch(action.type) {
    case UPDATE_TRANSLATION: {
      const { translated } = action.payload
      const original = action.payload.original.trim();
      const words = original.split(' ')

      return {
        original,
        translated,
        dictionary: getDictionaryFromMessage({ ...state.dictionary }, words),
      };
    }
    default:
      return state;
  }
};

export default translationsReducer;
