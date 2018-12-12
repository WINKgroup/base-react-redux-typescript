import { handleActions } from 'redux-actions';
import { RootState } from '../state';
import { User } from './User.model';
import { UserAction } from './user.actions';

const initialState: RootState.UserState = {
    id: 1,
    email: 'default@wink.by',
    name: 'Default user'
} as User;

export const userReducer = handleActions<RootState.UserState, User>(
  {
    [UserAction.Type.EDIT_USER]: (state: RootState.UserState, action) => {
      if (action.payload) {
        return {
          ...state,
          email: action.payload.email,
          name: action.payload.name
        } as RootState.UserState;
      }
      return state
    }
  },
  initialState
);