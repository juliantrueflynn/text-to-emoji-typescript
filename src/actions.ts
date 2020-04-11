import { IRevisionState, UPDATE_REVISION, UPDATE_TRANSLATION, ITranslationState, UPDATE_PREFERENCE, IPreferenceState } from './types'

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
