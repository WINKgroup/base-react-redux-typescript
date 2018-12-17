import { handleActions } from 'redux-actions'
import { AnyAction } from 'redux';
import { MessageAction } from 'app/components/Message/redux/message.actions';


export type MessageState = {
  content: string,
  timeout: number, 
}

const initialState = {
  content: '',
  timeout: 0,
} as MessageState;

export const messageReducer = handleActions<MessageState, AnyAction>(
  {
    [MessageAction.Type.SET_MESSAGE]: (state: MessageState, action: AnyAction) => {
      return {
        content: action.payload.content,
        timeout: action.payload.timeout, 
      }
    }
  },
  initialState
);