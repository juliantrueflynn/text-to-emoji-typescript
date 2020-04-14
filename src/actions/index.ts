export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
export const UPDATE_PREFERENCE = 'UPDATE_PREFERENCE';

export interface IRevisionState {
  presentIndex: number;
}

export interface ITranslationDictionary {
  [key: string]: string;
}

export interface ITranslationState {
  contentParts?: string[];
  codePointsDictionary?: ITranslationDictionary;
}

export interface IMessageState {
  content: string;
}

export interface IPreferenceState {
  skinTone: number | null;
}

interface IUpdateMessage {
  readonly type: typeof UPDATE_MESSAGE;
  readonly payload: IMessageState;
}

interface IUpdatePreference {
  readonly type: typeof UPDATE_PREFERENCE;
  readonly payload: IPreferenceState;
}

export type ActionTypes = IUpdateMessage | IUpdatePreference;

export function updateMessage(payload: IMessageState) {
  return {
    type: UPDATE_MESSAGE,
    payload,
  };
};

export function updatePreference(payload: IPreferenceState) {
  return {
    type: UPDATE_PREFERENCE,
    payload,
  };
};
