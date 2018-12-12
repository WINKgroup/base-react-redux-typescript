import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from 'app/store/state';
import { User } from 'app/store/user/User.model';
import * as style from './style.css';

export namespace UserDetail {
  export interface Props {
    user?: User;
  }
}

@connect(
  (state: RootState, ownProps): Pick<UserDetail.Props, 'user'> => ({ user: state.user })
)
export class UserDetail extends React.Component<UserDetail.Props> {
  render() {
    const { user } = this.props;
    return user && (
      <div>
        <h3>User details</h3>
        <div className={style.listContainer}>
          <div className={style.listElement}>
            <label>Email</label><p>{user.email}</p>
          </div>
          <div className={style.listElement}>
            <label>Name</label><p>{user.name}</p>
          </div>
          <div className={style.listElement}>
            <label>Id</label><p>{user.id}</p>
          </div>
        </div>
      </div>
    )
  }
}
