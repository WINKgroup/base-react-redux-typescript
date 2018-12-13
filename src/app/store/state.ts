import { User } from './user/User.model';

export interface RootState {
  components: ComponentsStates;
  user: RootState.UserState;
  router?: any;
}

export interface ComponentsStates {
  editUser: ComponentsStates.EditUserDetailsState;
}

export namespace RootState {
  export type UserState = User;
}

export namespace ComponentsStates {
  export type EditUserDetailsState = {
    errorMessage: string;
  }
}