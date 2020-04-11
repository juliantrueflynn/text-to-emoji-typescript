export const UNDO_REVISION = 'UNDO_REVISION';
export const REDO_REVISION = 'REDO_REVISION';
export const CLEAR_REVISION = 'CLEAR_REVISION';
export const UPDATE_TRANSLATION = 'UPDATE_TRANSLATION';
export const UPDATE_PREFERENCE = 'UPDATE_PREFERENCE';

export interface IRevisionState {
  presentIndex: number;
}

export interface ITranslationDictionary {
  [key: string]: string;
}

export interface ITranslationState {
  original: string;
  translated: string;
  dictionary?: ITranslationDictionary;
}

export interface IPreferenceState {
  skinTone: string;
}

interface IUndoRevision {
  readonly type: typeof UNDO_REVISION;
  readonly payload: IRevisionState;
}

interface IRedoRevision {
  readonly type: typeof REDO_REVISION;
  readonly payload: IRevisionState;
}

interface IClearRevision {
  readonly type: typeof CLEAR_REVISION;
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

export type ActionTypes = IUndoRevision | IRedoRevision | IClearRevision | IUpdateTranslation | IUpdatePreference;

export function undoRevision() {
  return {
    type: UNDO_REVISION,
  };
};

export function redoRevision() {
  return {
    type: REDO_REVISION,
  };
};

export function clearRevision() {
  return {
    type: CLEAR_REVISION,
  };
};

export function updateTranslation(payload: ITranslationState) {
  return {
    type: UPDATE_TRANSLATION,
    payload,
  };
};

export function updatePreference(payload: IPreferenceState) {
  return {
    type: UPDATE_PREFERENCE,
    payload,
  };
};
