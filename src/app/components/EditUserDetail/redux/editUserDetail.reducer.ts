import { handleActions } from 'redux-actions'
import { EditUserDetailAction } from 'app/components/EditUserDetail/redux/editUserDetail.actions';
import { AnyAction } from 'redux';

export type EditUserDetailsState = {
  errorMessage: string;
}

const initialState = {
  errorMessage: ''
} as EditUserDetailsState;

export const editUserReducer = handleActions<EditUserDetailsState, AnyAction>(
  {
    [EditUserDetailAction.Type.SET_ERRROR_MESSAGE]: (state: EditUserDetailsState, action: AnyAction) => {
      return {
        errorMessage: action.payload
      }
    }
  },
  initialState
);