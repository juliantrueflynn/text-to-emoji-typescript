import { ITranslationState, ActionTypes, UPDATE_MESSAGE, ITranslationDictionary } from '../actions';

const initialState: ITranslationState = {};

function translationsReducer(state = initialState, action: ActionTypes): ITranslationState {
  switch(action.type) {
    case UPDATE_MESSAGE: {
      const content = action.payload.content.trim();
      const words = content.split(' ')

      // TODO: setting value of hash properties to codepoint.
      return words.reduce((acc: ITranslationDictionary, curr: string, index: number) => {
        if (curr) {
          const nextWord = words[index + 1];
          const combinationWord = `${curr} ${nextWord}`
          acc[curr] = curr;

          if (curr && nextWord) {
            acc[combinationWord] = combinationWord;
          }
        }

        return acc;
      }, { ...state })
    }
    default:
      return state;
  }
};

export default translationsReducer;
