import { createAction } from "redux-actions";
import { User } from "./User.model";

export namespace UserAction {
  export enum Type {
    EDIT_USER = 'EDIT_USER',
    SAVE_USER = 'SAVE_USER'
  }
  
  export const editUser = createAction<User>(Type.EDIT_USER)
  export const saveUser = createAction<User>(Type.SAVE_USER)
}

export type UserAction = Omit<typeof UserAction, 'Type'>;
