import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import TablesPage from './pages/TablesPage';
import MapsPage from './pages/MapsPage';
import NotFoundPage from './pages/NotFoundPage';
import DetailedView from  './pages/DetailedView';
import AddEmployee from './pages/AddEmployee';
import RemoveEmployee from './pages/RemoveEmployee';
import Update from './pages/Update.js';
import Calendar from './pages/Calendar.js';
import CreditsPage from './pages/CreditsPage.js';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={DashboardPage} />
        <Route path='/dashboard' component={DashboardPage} />
        <Route path='/profile' component={ProfilePage} />
        <Route path='/tables' component={TablesPage} />
        <Route path='/add' component={AddEmployee} />
        <Route path='/remove' component={RemoveEmployee}/>
        <Route path='/404' component={NotFoundPage} />
        <Route path='/maps' component={MapsPage} />
        <Route path='/details' component={DetailedView}/>
        <Route path='/calendar' component={Calendar}/>
        <Route path='/credits' component={CreditsPage}/>
        <Route path='/update' component={Update}/>
      </Switch>
    );
  }
}

export default Routes;
