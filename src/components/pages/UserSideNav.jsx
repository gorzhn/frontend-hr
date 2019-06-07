import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';
import {ToastsContainer, ToastsStore} from 'react-toasts';

class AdminSideNav extends React.Component{
    constructor(props){
        super(props);
        this.state = {};

    }
render(){
    return(

<React.Fragment>
 <MDBListGroup className="list-group-flush">
                <NavLink exact={true} to="/requestleave" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="calendar" className="mr-3"/>
                        Request leave                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/calendar" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="calendar-day" className="mr-3"/>
                        Events Calendar
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/events" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="calendar-day" className="mr-3"/>
                        Events Information
                    </MDBListGroupItem>
                </NavLink>
                
                
                
            </MDBListGroup>
            </React.Fragment>
)
};


}
export default AdminSideNav;