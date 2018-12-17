import * as React from 'react';
import './style.css';
import { UserDetail } from 'app/components';
import { EditUserDetail } from 'app/components';
import { Loader } from 'app/components/Loader';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export class App extends React.Component {
  render() {
    return (
      <div>
        <Loader />
        <div className="col6">
          <UserDetail />
        </div>
        <div className="col6">
          <EditUserDetail />
          <Button label="button"/>
        </div>
      </div>
    );
  }
}