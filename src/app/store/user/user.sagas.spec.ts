import { describe, it } from 'mocha'
import * as chai from 'chai'
import { saveUser } from './user.sagas'
import { Action } from 'redux-actions';
import { User } from './User.model';
import { UserAction } from './user.actions';
import * as sinonChai from 'sinon-chai'
import { EditUserDetailAction } from 'app/components/EditUserDetail/redux/editUserDetail.actions';
import { put } from 'redux-saga/effects';

chai.use(sinonChai)

describe('User sagas', () => {
  describe('save', () => {
    it('shold send an error with a wrong email', () => {
      const saga = saveUser({
       type: UserAction.Type.SAVE_USER,
       payload: {
         name: 'luigi',
         email: 'wrong',
         id: 0
       } as User
      } as Action<User>)

      saga.next()

      chai.assert.deepEqual(
        saga.next().value,
        put(EditUserDetailAction.setErrorMessage('invalid email'))
      )

      chai.expect(saga.next().done).to.be.equal(true)
    })
    
  })
})