import EmojiDataModel from './EmojiDataModel';
import data from '../data/emojiData.json';

const jsonData: JsonObjectLiteral = data;

describe('getAll', () => {
  it('matches JSON data', () => {
    const result = EmojiDataModel.getAll();

    expect(result).toMatchObject(jsonData);
  });
});

describe('get', () => {
  it('matches JSON property', () => {
    const key = 'smile';
    const key2 = 'smirk';
    const result = EmojiDataModel.get(key);
    const result2 = EmojiDataModel.get(key2);

    expect(result).toEqual(jsonData[key]);
    expect(result2).toEqual(jsonData[key2]);
  });
});
