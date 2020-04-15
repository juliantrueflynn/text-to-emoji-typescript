import { ITranslationState, ITranslationDictionary, ActionTypes, UPDATE_MESSAGE } from '../actions';
import EmojiDataModel from '../dataModels/EmojiDataModel';

const initialState: ITranslationState = {
  contentParts: [],
  codePointsDictionary: {},
};

function translationReducer(state = initialState, action: ActionTypes): ITranslationState {
  switch(action.type) {
    case UPDATE_MESSAGE: {
      const words: string[] = action.payload.content.trim().split(' ');
      const resultWords: string[] = [];
      const dictionary: ITranslationDictionary = {};

      const setMatchInDictionary = (query: string): void => {
        const match = EmojiDataModel.get(query);

        if (match) {
          dictionary[query] = [match.codePoint, match.shortcode];
        }
      }

      words.forEach((word: string, index: number) => {
        const nextWord = words[index + 1];
        const match = nextWord && setMatchInDictionary(`${word} ${nextWord}`);
        !match && setMatchInDictionary(word);
        resultWords.push(word);
      });

      return {
        contentParts: resultWords,
        codePointsDictionary: dictionary,
      };
    }
    default:
      return state;
  }
};

export default translationReducer;
