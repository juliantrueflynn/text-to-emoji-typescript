export const UNDO_REVISION = 'UNDO_REVISION';
export const REDO_REVISION = 'REDO_REVISION';
export const CLEAR_REVISION = 'CLEAR_REVISION';
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

interface IUndoRevision {
  readonly type: typeof UNDO_REVISION;
}

interface IRedoRevision {
  readonly type: typeof REDO_REVISION;
}

interface IClearRevision {
  readonly type: typeof CLEAR_REVISION;
}

interface IUpdateMessage {
  readonly type: typeof UPDATE_MESSAGE;
  readonly payload: IMessageState;
}

interface IUpdatePreference {
  readonly type: typeof UPDATE_PREFERENCE;
  readonly payload: IPreferenceState;
}

export type ActionTypes = IUndoRevision | IRedoRevision | IClearRevision | IUpdateMessage | IUpdatePreference;

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
