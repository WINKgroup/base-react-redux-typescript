import * as React from 'react';
import * as style from './style.css';
import { UserDetail } from 'app/components';
import { EditUserDetail } from 'app/components';

export class App extends React.Component {
  render() {
    return (
      <div>
        <div className={style.col6}>
          <UserDetail />
        </div>
        <div className={style.col6}>
          <EditUserDetail />
        </div>
      </div>
    );
  }
}