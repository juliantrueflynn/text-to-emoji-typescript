import { ITranslationState, ITranslationDictionary, ActionTypes, UPDATE_MESSAGE } from '../actions';

const initialState: ITranslationState = {
  content: '',
  codePointsDictionary: {},
};

function translationReducer(state = initialState, action: ActionTypes): ITranslationState {
  switch(action.type) {
    case UPDATE_MESSAGE: {
      const words: string[] = action.payload.content.trim().split(' ');
      const resultWords: string[] = [];
      const dictionary: ITranslationDictionary = {};

      // TODO: setting value of hash properties and array to codepoint value.
      words.forEach((word: string, index: number) => {
        const nextWord = words[index + 1];
        const combinationWord = `${word} ${nextWord}`
        resultWords.push(word);
        dictionary[word] = word;

        if (nextWord) {
          dictionary[combinationWord] = combinationWord;
        }
      })

      return {
        content: resultWords.join(' '),
        codePointsDictionary: dictionary,
      };
    }
    default:
      return state;
  }
};

export default translationReducer;
