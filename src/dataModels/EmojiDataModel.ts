import data from '../data/emojiData.json';

const emojis: JsonObjectLiteral = data;

const EmojiDataModel = {
  getAll: (): JsonObjectLiteral => emojis,
  get: (key: string): string | undefined => emojis[key],
};

export default Object.freeze(EmojiDataModel);
