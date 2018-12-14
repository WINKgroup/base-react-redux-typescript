import { User } from './User.model'
import { Action } from 'redux-actions'
import { UserAction } from './user.actions'
import { takeLatest, put } from 'redux-saga/effects';
import { EditUserDetailAction } from 'app/components/EditUserDetail/redux/editUserDetail.actions';
import { LoaderAction } from 'app/components/Loader/redux/loader.actions';
import { MessageAction } from 'app/components/Message/redux/message.actions';

export function* saveUser(action: Action<User>) {
  yield put(EditUserDetailAction.setErrorMessage(''))
  if (!action.payload) {
    return
  }

  if (!action.payload.email.includes('@')) {
    yield put(EditUserDetailAction.setErrorMessage('invalid email'))
    return
  }

  yield put(LoaderAction.setVisbility(true))
  const success = yield new Promise(resolve => {
    setTimeout(() => {
      resolve(Math.random() > 0.7 ? true : false)
    }, 2000);
  })

  yield put(LoaderAction.setVisbility(false))

  if (success) {
    yield put(UserAction.editUser(action.payload!))
    yield put(MessageAction.setMessage({content: 'blabla', timeout: 0}))
  } else {
    yield put(EditUserDetailAction.setErrorMessage('Connection error'))
  }
}

export default function* () {
  yield takeLatest(UserAction.Type.SAVE_USER, saveUser);
}