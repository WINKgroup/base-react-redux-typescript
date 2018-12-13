import { combineReducers } from 'redux';
import { RootState } from './state';
import { userReducer } from './user/user.reducer';
import { uiReducers } from 'app/store/components/components.reducers';
export { RootState };

export const rootReducer = combineReducers<RootState>({
  components: uiReducers as any,
  user: userReducer as any
});
