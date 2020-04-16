import data from '../data/emojiData.json';

const QUERY_REGEX = /[^a-zA-Z0-9]/g;

type EmojiDataJson = {
  readonly [key: string]: string[];
};

type EmojiData = {
  readonly query: string;
  readonly codePoint: string;
  readonly shortcode: string;
};

const emojis: EmojiDataJson = data;

const EmojiDataModel = {
  getAll: (): EmojiDataJson => emojis,
  get: (key: string): EmojiData | null => {
    const formatWord = (text: string): string =>
      text.toLowerCase().replace(QUERY_REGEX, '');
    const match = emojis[formatWord(key)];

    if (!match) {
      return null;
    }

    return {
      query: key,
      codePoint: match[0],
      shortcode: match[1],
    };
  },
};

export default Object.freeze(EmojiDataModel);
