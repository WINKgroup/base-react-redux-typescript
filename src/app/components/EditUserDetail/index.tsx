import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RootState } from 'app/store/state';
import { User } from 'app/store/user/User.model';
import { omit } from 'app/utils';
import './style.css';
import { UserAction } from 'app/store/user/user.actions';

export namespace EditUserDetail {
  export interface Props {
    user?: User;
    saveUser?: Function;
    errorMessage?: string;
  }
}

interface State {
  email: string;
  name: string;
}

@connect(
  (state: RootState) => ({
    user: state.user,
    errorMessage: state.components.editUser.errorMessage
  }),
  (dispatch: Dispatch): Pick<EditUserDetail.Props, 'saveUser'> => ({
    saveUser: bindActionCreators(omit(UserAction, 'Type'), dispatch).saveUser
  })
)
export class EditUserDetail extends React.Component<EditUserDetail.Props, State> {

  constructor (prop: EditUserDetail.Props){
    super(prop)
    let { email, name } = prop.user!

    this.state = {
      email, name
    } as State
  }

  onSave () {
    this.props.saveUser && this.props.saveUser({
      id: this.props.user!.id,
      email: this.state.email,
      name: this.state.name
    })
  }

  render() {
    const { user } = this.props;
    return user && (
      <div>
        <h3>Edit user</h3>
        {this.props.errorMessage && (<label>{this.props.errorMessage}</label>)}
        <div className="listContainer">
          <div className="listElement">
            <label>Email</label>
            <input placeholder={user.email} onChange={e => this.setState({ email: e.target.value}) }/>
          </div>
          <div className="listElement">
            <label>Name</label>
            <input placeholder={user.name} onChange={e => this.setState({ name: e.target.value}) }/>
          </div>
          <div className="listElement">
            <label>Id</label><p>{user.id}</p>
          </div>
        </div>
        <button onClick={this.onSave.bind(this)}>Save</button>
      </div>
    )
  }
}
