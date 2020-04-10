export interface IRevisionState {
  presentIndex: number;
  total: number;
}

export interface TranslationState {
  originalMessage: string;
  translatedMessage: string;
}

export interface IPreferenceState {
  skinTone: string;
}

export const UPDATE_REVISION = 'UPDATE_REVISION'

interface IUpdateRevision {
  type: typeof UPDATE_REVISION;
  payload: IRevisionState;
}

export type RevisionTypes = IUpdateRevision
