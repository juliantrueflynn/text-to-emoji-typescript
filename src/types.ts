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

export const UPDATE_REVISION = 'UPDATE_REVISION'

export const UPDATE_TRANSLATION = 'UPDATE_TRANSLATION'

interface IUpdateRevision {
  type: typeof UPDATE_REVISION;
  payload: IRevisionState;
}

interface IUpdateTranslation {
  type: typeof UPDATE_TRANSLATION;
  payload: ITranslationState;
}

export type RevisionTypes = IUpdateRevision;

export type TranslationTypes = IUpdateTranslation;
