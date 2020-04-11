import { IRevisionState, ActionTypes, UNDO_REVISION, REDO_REVISION } from '../actions';

const initialState: IRevisionState = {
  presentIndex: 0,
};

function revisionsReducer(state = initialState, action: ActionTypes): IRevisionState {
  switch(action.type) {
    case UNDO_REVISION: {
      return {
        presentIndex: state.presentIndex > 0 ? state.presentIndex - 1 : 0,
      };
    }
    case REDO_REVISION: {
      return {
        presentIndex: state.presentIndex + 1,
      };
    }
    default:
      return state;
  }
};

export default revisionsReducer;
