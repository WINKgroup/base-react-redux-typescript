import { User } from './user/User.model';
import { ComponentsStates } from 'app/store/components/components.state';

export interface RootState {
  components: ComponentsStates;
  user: RootState.UserState;
  router?: any;
}


export namespace RootState {
  export type UserState = User;
}