export const UPDATE_REVISION = 'UPDATE_REVISION';
export const UPDATE_TRANSLATION = 'UPDATE_TRANSLATION';
export const UPDATE_PREFERENCE = 'UPDATE_PREFERENCE';

export interface IRevisionState {
  presentIndex: number;
}

export interface ITranslationState {
  originalMessage: string;
  translatedMessage: string;
}

export interface IPreferenceState {
  skinTone: string;
}

interface IUpdateRevision {
  readonly type: typeof UPDATE_REVISION;
  readonly payload: IRevisionState;
}

interface IUpdateTranslation {
  readonly type: typeof UPDATE_TRANSLATION;
  readonly payload: ITranslationState;
}

interface IUpdatePreference {
  readonly type: typeof UPDATE_PREFERENCE;
  readonly payload: IPreferenceState;
}

export type ActionTypes = IUpdateRevision | IUpdateTranslation | IUpdatePreference;

export function updateRevision(payload: IRevisionState) {
  return {
    type: UPDATE_REVISION,
    payload: payload
  };
};

export function updateTranslation(payload: ITranslationState) {
  return {
    type: UPDATE_TRANSLATION,
    payload: payload
  };
};

export function updatePreference(payload: IPreferenceState) {
  return {
    type: UPDATE_PREFERENCE,
    payload: payload
  };
};
