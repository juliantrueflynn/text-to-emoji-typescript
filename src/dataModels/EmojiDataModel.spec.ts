import EmojiDataModel from './EmojiDataModel';
import data from '../data/emojiData.json';

describe('getAll', () => {
  it('matches JSON data', () => {
    const result = EmojiDataModel.getAll();

    expect(result).toMatchObject(data);
  });
});

describe('get', () => {
  it('matches JSON property', () => {
    const key1 = 'smile';
    const key2 = 'smirk';
    const result1 = EmojiDataModel.get(key1);
    const result2 = EmojiDataModel.get(key2);
    const expectedShape1 = {
      query: 'smile',
      codePoint: '1f603',
      shortcode: ':smiley:',
    };
    const expectedShape2 = {
      query: 'smirk',
      codePoint: '1f60f',
      shortcode: ':smirk:',
    };

    expect(result1).toMatchObject(expectedShape1);
    expect(result2).toEqual(expectedShape2);
  });
});
