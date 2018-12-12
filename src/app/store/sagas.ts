import { fork, all } from 'redux-saga/effects';
import userSagas from './user/user.sagas';

// add here all your watchers
// https://github.com/yelouafi/redux-saga/blob/master/examples/real-world/sagas/index.js

const sagas = [
  userSagas
]

// Register all your watchers
export default function* root() {
  yield all(sagas.map(saga => fork(saga)))
}