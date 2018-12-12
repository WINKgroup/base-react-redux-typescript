import { createAction } from "redux-actions";
import { User } from "./User.model";

export namespace UserAction {
  export enum Type {
    /*ADD_TODO = 'ADD_TODO',
    EDIT_TODO = 'EDIT_TODO',
    DELETE_TODO = 'DELETE_TODO',
    COMPLETE_TODO = 'COMPLETE_TODO',
    COMPLETE_ALL = 'COMPLETE_ALL',
    CLEAR_COMPLETED = 'CLEAR_COMPLETED'*/
    EDIT_USER = 'EDIT_USER',
    SAVE_USER = 'SAVE_USER'
  }

  //export const addTodo = createAction<PartialPick<TodoModel, 'text'>>(Type.ADD_TODO);
  export const editUser = createAction<User>(Type.EDIT_USER)
  export const saveUser = createAction<User>(Type.SAVE_USER)
}

export type UserAction = Omit<typeof UserAction, 'Type'>;
