import { MessageState, ActionTypes, UPDATE_MESSAGE } from '../actions';

const initialState: MessageState = {
  content: '',
};

function messageReducer(
  state = initialState,
  action: ActionTypes
): MessageState {
  switch (action.type) {
    case UPDATE_MESSAGE: {
      return {
        content: action.payload.content,
      };
    }
    default:
      return state;
  }
}

export default messageReducer;
