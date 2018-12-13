import * as React from 'react';
import * as style from './style.css';
import { UserDetail } from 'app/components';
import { EditUserDetail } from 'app/components';
import { Loader } from 'app/components/Loader';

export class App extends React.Component {
  render() {
    return (
      <div>
        <Loader />
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