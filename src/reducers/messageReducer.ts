import { IMessageState, ActionTypes, UPDATE_MESSAGE } from '../actions';

const initialState: IMessageState = {
  content: '',
}

function messageReducer(state = initialState, action: ActionTypes) {
  switch(action.type) {
    case UPDATE_MESSAGE: {
      return {
        content: action.payload.content,
      }
    }
    default:
      return state;
  }
}

export default messageReducer;
