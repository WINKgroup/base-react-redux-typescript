import { describe, it } from 'mocha'
import { expect } from 'chai'
import { editUserReducer } from './user.reducer';
import { User } from './User.model';
import { UserAction } from './user.actions';
import { Action } from 'redux-actions';
import { RootState } from '../reducers';

const USER_ID = 2
const INITIAL_STATE = {
  email: 'user@test.com',
  name: 'user',
  id: USER_ID
} as RootState.UserState

const actionFactory = (type: UserAction.Type, name: string, email: string, id: number) :Action<RootState.UserState> => ({
  type,
  payload: {
    name, email, id
  } as User
} as Action<RootState.UserState>)

describe('User reducers', () => {
  describe('edit user', () => {
    it('should not update the state passing a user with a wrong id', () => {
      const action = actionFactory(UserAction.Type.EDIT_USER, 'test', 'testMail', USER_ID + 1)
      const newState = editUserReducer(INITIAL_STATE, action)
      expect(newState).to.be.equal(INITIAL_STATE)
    })

    it('should update the state with a new user with the same id', () => {
      const action = actionFactory(UserAction.Type.EDIT_USER, 'test', 'testMail', USER_ID)
      const newState = editUserReducer(INITIAL_STATE, action)
      expect(newState).to.have.property('email').equal('testMail')
      expect(newState).to.have.property('name').equal('test')
      expect(newState).to.have.property('id').equal(USER_ID)
    })
  })
})