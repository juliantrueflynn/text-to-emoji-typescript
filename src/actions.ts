import { IRevisionState, UPDATE_REVISION } from './types'

export function updateRevision(payload: IRevisionState) {
  return {
    type: UPDATE_REVISION,
    payload: payload
  };
};
