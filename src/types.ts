export const UPDATE_REVISION = 'UPDATE_REVISION';
export const UPDATE_TRANSLATION = 'UPDATE_TRANSLATION';
export const UPDATE_PREFERENCE = 'UPDATE_PREFERENCE';

export interface IRevisionState {
  presentIndex: number;
  total: number;
}

export interface ITranslationState {
  originalMessage: string;
  translatedMessage: string;
}

export interface IPreferenceState {
  skinTone: string;
}

interface IUpdateRevision {
  type: typeof UPDATE_REVISION;
  payload: IRevisionState;
}

interface IUpdateTranslation {
  type: typeof UPDATE_TRANSLATION;
  payload: ITranslationState;
}

interface IUpdatePreference {
  type: typeof UPDATE_PREFERENCE;
  payload: IPreferenceState;
}

export type RevisionTypes = IUpdateRevision;

export type TranslationTypes = IUpdateTranslation;

export type PreferenceTypes = IUpdatePreference;
