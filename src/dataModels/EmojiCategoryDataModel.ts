import data from '../data/emojiCategoryData.json';
import { CategoryFilter } from '../actions';

type EmojiCategory = Exclude<CategoryFilter, CategoryFilter.all>

export type EmojiCategoryDataJson = {
  readonly [key in EmojiCategory]: string[];
}

const emojiCategories: EmojiCategoryDataJson = data;

const EmojiCategoryDataModel = {
  getAll: (): EmojiCategoryDataJson => emojiCategories,
  get: (key: EmojiCategory): string[] => emojiCategories[key] || [],
};

export default Object.freeze(EmojiCategoryDataModel);
