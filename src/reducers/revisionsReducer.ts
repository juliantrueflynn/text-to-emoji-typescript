import { IRevisionState, RevisionTypes } from '../types';

const initialState: IRevisionState = {
  presentIndex: 0,
  total: 0,
};

function revisionsReducer(state = initialState, action: RevisionTypes): IRevisionState {
  switch(action.type) {
    case 'UPDATE_REVISION':
      return state;
    default:
      return state;
  }
};

export default revisionsReducer;
