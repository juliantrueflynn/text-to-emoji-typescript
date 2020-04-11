export const UNDO_REVISION = 'UNDO_REVISION';
export const REDO_REVISION = 'REDO_REVISION';
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

interface IUndoRevision {
  readonly type: typeof UNDO_REVISION;
  readonly payload: IRevisionState;
}

interface IRedoRevision {
  readonly type: typeof REDO_REVISION;
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

export type ActionTypes = IUndoRevision | IRedoRevision | IUpdateTranslation | IUpdatePreference;

export function undoRevision(payload: IRevisionState) {
  return {
    type: UNDO_REVISION,
    payload: payload
  };
};

export function redoRevision(payload: IRevisionState) {
  return {
    type: REDO_REVISION,
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
