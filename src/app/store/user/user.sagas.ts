import { User } from './User.model'
import { Action } from 'redux-actions'
import { UserAction } from './user.actions'
import { takeLatest, put } from 'redux-saga/effects';
import { EditUserDetailAction } from 'app/components/EditUserDetail/redux/editUserDetail.actions';

export function* saveUser(action: Action<User>) {
  yield put(EditUserDetailAction.setErrorMessage(''))
  if(!action.payload){
    return
  }

  if(!action.payload.email.includes('@')){
    yield put(EditUserDetailAction.setErrorMessage('invalid email'))
    return
  }

  const success = yield new Promise(resolve => {
    setTimeout(() => {
      resolve(Math.random() > 0.7? true: false)
    }, 2000);
  })

  if (success){
    yield put(UserAction.editUser(action.payload!))
  } else {
    yield put(EditUserDetailAction.setErrorMessage('Connection error'))
  }
}

export default function* (){
  yield takeLatest(UserAction.Type.SAVE_USER, saveUser);
}