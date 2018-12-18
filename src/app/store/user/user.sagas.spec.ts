import { describe, it } from 'mocha'
import * as chai from 'chai'
import { saveUser } from './user.sagas'
import { Action } from 'redux-actions';
import { User } from './User.model';
import { UserAction } from './user.actions';
import * as sinonChai from 'sinon-chai'
import { EditUserDetailAction } from 'app/components/EditUserDetail/redux/editUserDetail.actions';
import { put } from 'redux-saga/effects';
import { LoaderAction } from 'app/components/Loader/redux/loader.actions';
import * as sinon from 'sinon';

chai.use(sinonChai)

describe('User sagas', () => {
  describe('save', () => {
    
    let sandbox = sinon.createSandbox()  
    afterEach(() => {
      sandbox.reset()
    })
    sandbox.stub(Math, 'random').returns(0)

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

    it('should send an error when the http call goes wrong', () => {
      const saga = saveUser({
        type: UserAction.Type.SAVE_USER,
        payload: {
          name: 'luigi',
          email: 'wrong@',
          id: 0
        } as User
      } as Action<User>)

      saga.next()
      chai.assert.deepEqual(
        //the result of saga
        saga.next().value,
        //
        put(LoaderAction.setVisbility(true)),
        'should show a loader'
      )
      saga.next()
      chai.assert.deepEqual(
        saga.next().value,
        put(LoaderAction.setVisbility(false)),
        'should hide the loader'
      )
    })
  })
}



)