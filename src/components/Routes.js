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
import LogIn from './pages/LogIn.js'
import ProtectedRoute from './ProtectedRoute.js';
import Register from './pages/Register.js';
import AddEvent from './pages/AddEvent.jsx';
import EventsTable from './pages/EventsTable.js';
import RequestLeave from './pages/RequestLeave.jsx';
import Leaves from './pages/Leaves';
class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <ProtectedRoute path='/' exact component={LogIn} />
        <ProtectedRoute path='/dashboard' component={DashboardPage} />
        <ProtectedRoute path='/profile' component={ProfilePage} />
        <ProtectedRoute path='/tables' component={TablesPage} />
        <ProtectedRoute path='/add' component={AddEmployee} />
        <ProtectedRoute path='/remove' component={RemoveEmployee}/>
        <ProtectedRoute path='/404' component={NotFoundPage} />
        <ProtectedRoute path='/maps' component={MapsPage} />
        <ProtectedRoute path='/details' component={DetailedView}/>
        <Route path='/calendar' component={Calendar}/>
        <ProtectedRoute path='/credits' component={CreditsPage}/>
        <ProtectedRoute path='/update' component={Update}/>
        <ProtectedRoute path='/addevent' component={AddEvent}/>
        <ProtectedRoute path='/leaves' component={Leaves}/>


        
        // employee request leave
        <Route path='/requestleave' component={RequestLeave}/>
        //end 

        <Route path='/events' component={EventsTable}/>
        <Route path='/login' component={LogIn} />
        <Route path='/register' component={Register}/>
      </Switch>
    );
  }
}

export default Routes;
