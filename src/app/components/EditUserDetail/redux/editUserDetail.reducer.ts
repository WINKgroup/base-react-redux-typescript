import { handleActions } from 'redux-actions'
import { ComponentsStates } from 'app/store/state';
import { EditUserDetailAction } from 'app/components/EditUserDetail/redux/editUserDetail.actions';
import { AnyAction } from 'redux';

const initialState = {
  errorMessage: ''
} as ComponentsStates.EditUserDetailsState;

export const editUserReducer = handleActions<ComponentsStates.EditUserDetailsState, AnyAction>(
  {
    [EditUserDetailAction.Type.SET_ERRROR_MESSAGE]: (state: ComponentsStates.EditUserDetailsState, action: AnyAction) => {
      return {
        errorMessage: action.payload
      }
    }
  },
  initialState
);