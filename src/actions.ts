import { IRevisionState, UPDATE_REVISION, UPDATE_TRANSLATION, ITranslationState } from './types'

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
