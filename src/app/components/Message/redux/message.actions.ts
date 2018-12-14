import { createAction } from "redux-actions";

export namespace MessageAction {
  export interface Message {
    content: string, 
    timeout: number, 
  }
  export enum Type {
    SET_MESSAGE = 'SET_MESSAGE'
  }
  export const setMessage = createAction<Message>(Type.SET_MESSAGE)
}

export type MessageAction = Omit<typeof MessageAction, 'Type'>;
