import data from '../data/emojiCategoryData.json';
import { Category } from '../actions';

type NonNullCategoryFilter = Exclude<Category, Category.all>;

export type EmojiCategoryDataJson = {
  readonly [key in NonNullCategoryFilter]: {
    [key: string]: number;
  };
}

const emojiCategories: EmojiCategoryDataJson = data;

const EmojiCategoryDataModel = {
  get: (key: NonNullCategoryFilter, shortcode: string): number | null => (
    emojiCategories[key][shortcode] || null
  ),
};

export default Object.freeze(EmojiCategoryDataModel);
