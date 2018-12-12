import { User } from './user/User.model';

export interface RootState {
  user: RootState.UserState;
  router?: any;
}

export namespace RootState {
  export type UserState = User;
}