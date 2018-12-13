import { combineReducers } from 'redux';
import { RootState, ComponentsStates } from './state';
import { userReducer } from './user/user.reducer';
import { editUserReducer } from 'app/components/EditUserDetail/redux/editUserDetail.reducer';

export { RootState };

// NOTE: current type definition of Reducer in 'redux-actions' module
// doesn't go well with redux@4

export const uiReducers = combineReducers<ComponentsStates>({
  editUser: editUserReducer as any
});

export const rootReducer = combineReducers<RootState>({
  components: uiReducers as any,
  user: userReducer as any
});
