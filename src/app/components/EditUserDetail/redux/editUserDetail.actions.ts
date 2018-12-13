import { createAction } from "redux-actions";

export namespace EditUserDetailAction {
  export enum Type {
    SET_ERRROR_MESSAGE = 'SET_ERRROR_MESSAGE'
  }
  export const setErrorMessage = createAction<string>(Type.SET_ERRROR_MESSAGE)
}

export type EditUserDetailAction = Omit<typeof EditUserDetailAction, 'Type'>;
