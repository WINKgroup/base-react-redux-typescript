import { User } from './User.model'
import { Action } from 'redux-actions'
import { UserAction } from './user.actions'
import { takeLatest, put } from 'redux-saga/effects';

export function* saveUser(action: Action<User>) {
  console.log('save user saga started, make the http call ... ')
  if(!action.payload){
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
    console.error('REQUEST FAILED')
  }
}

export default function* (){
  yield takeLatest(UserAction.Type.SAVE_USER, saveUser);
}