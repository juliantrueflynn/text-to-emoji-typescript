import { IRevisionState, ActionTypes, UPDATE_REVISION } from '../actions';

const initialState: IRevisionState = {
  presentIndex: 0,
};

function revisionsReducer(state = initialState, action: ActionTypes): IRevisionState {
  switch(action.type) {
    case UPDATE_REVISION: {
      return {
        presentIndex: state.presentIndex,
      };
    }
    default:
      return state;
  }
};

export default revisionsReducer;
