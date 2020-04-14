import EmojiCategoryDataModel, { EmojiCategoryDataJson } from './EmojiCategoryDataModel';
import data from '../data/emojiCategoryData.json';
import { CategoryFilter } from '../actions';

const json: EmojiCategoryDataJson = data;

describe('getAll', () => {
  it('matches JSON data', () => {
    const result = EmojiCategoryDataModel.getAll();

    expect(result).toMatchObject(json);
  });
});

describe('get', () => {
  it('matches JSON property', () => {
    const result = EmojiCategoryDataModel.get(CategoryFilter.foodAndDrink);
    const expectedShape = json.foodAndDrink;

    expect(result).toMatchObject(expectedShape);
  });
});
