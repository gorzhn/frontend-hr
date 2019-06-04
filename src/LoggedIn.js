import React from 'react';
import Routes from '../src/components/Routes';
import SideNavigation from './components/sideNavigation';
import './index.css';

class LoggedIn extends React.Component {
  
  render() {
    return (
        <div className="flexible-content">
          <SideNavigation />
          <main id="content" className="p-5">
            <Routes />
          </main>
        </div>
    );
  }
}

export default LoggedIn;
