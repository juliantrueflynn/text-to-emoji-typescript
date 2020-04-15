import EmojiCategoryDataModel, { EmojiCategoryDataJson } from './EmojiCategoryDataModel';
import data from '../data/emojiCategoryData.json';
import { Category } from '../actions';

const json: EmojiCategoryDataJson = data;

describe('get', () => {
  it('matches JSON property', () => {
    const shortcode = ':smiley:'
    const result = EmojiCategoryDataModel.get(Category.smileysAndPeople, shortcode);
    const expectedShape = json[Category.smileysAndPeople][shortcode];

    expect(result).toEqual(expectedShape);
  });
});
