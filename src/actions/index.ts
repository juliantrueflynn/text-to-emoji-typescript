export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
export const UPDATE_CATEGORY_FILTER = 'UPDATE_CATEGORY_FILTER';

export enum Category {
  all = 'all',
  smileysAndPeople = 'smileysAndPeople',
  animalsAndNature = 'animalsAndNature',
  foodAndDrink = 'foodAndDrink',
  activity = 'activity',
  travelAndPlaces = 'travelAndPlaces',
  objects = 'objects',
  symbols = 'symbols',
  flags = 'flags',
}

export type CategoryFilter = Exclude<Category, Category.all> | null;

export type TranslationDictionary = {
  [key: string]: string[];
};

export type TranslationState = {
  contentParts?: string[];
  codePointsDictionary?: TranslationDictionary;
};

export type MessageState = {
  content: string;
};

export type CategoryFilterState = {
  category: CategoryFilter | Category.all;
};

type UpdateMessage = {
  readonly type: typeof UPDATE_MESSAGE;
  readonly payload: MessageState;
};

type UpdateCategoryFilter = {
  readonly type: typeof UPDATE_CATEGORY_FILTER;
  readonly payload: CategoryFilterState;
};

export type ActionTypes = UpdateMessage | UpdateCategoryFilter;

export const updateMessage = (payload: MessageState): UpdateMessage => ({
  type: UPDATE_MESSAGE,
  payload,
});

export const updateCategoryFilter = (
  payload: CategoryFilterState
): UpdateCategoryFilter => ({
  type: UPDATE_CATEGORY_FILTER,
  payload,
});
