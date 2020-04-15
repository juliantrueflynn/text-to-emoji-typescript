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

export interface ITranslationDictionary {
  [key: string]: string[];
}

export interface ITranslationState {
  contentParts?: string[];
  codePointsDictionary?: ITranslationDictionary;
}

export interface IMessageState {
  content: string;
}

export interface ICategoryFilterState {
  category: CategoryFilter | Category.all;
}

interface IUpdateMessage {
  readonly type: typeof UPDATE_MESSAGE;
  readonly payload: IMessageState;
}

interface IUpdateCategoryFilter {
  readonly type: typeof UPDATE_CATEGORY_FILTER;
  readonly payload: ICategoryFilterState;
}

export type ActionTypes = IUpdateMessage | IUpdateCategoryFilter;

export function updateMessage(payload: IMessageState) {
  return {
    type: UPDATE_MESSAGE,
    payload,
  };
};

export function updateCategoryFilter(payload: ICategoryFilterState) {
  return {
    type: UPDATE_CATEGORY_FILTER,
    payload,
  };
};
