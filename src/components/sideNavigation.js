import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';

const TopNavigation = () => {
    return (
        <div className="sidebar-fixed position-fixed">
             <MDBListGroup className="list-group-flush">
                <NavLink exact={true} to="/dashboard" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="chart-pie" className="mr-3"/>
                        Company Analytics                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/tables" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="table" className="mr-3"/>
                        Company Employees
                    </MDBListGroupItem>
                </NavLink>
                <NavLink  to="/add" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="user-plus" className="mr-3"/>
                        Insert Employee                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/calendar" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="user" className="mr-3"/>
                        Information Calendar
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/update" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="user" className="mr-3"/>
                        Update Information
                    </MDBListGroupItem>
                </NavLink>
                
                
                <NavLink to="/credits" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="user" className="mr-3"/>
                        Credits
                    </MDBListGroupItem>
                </NavLink>
            </MDBListGroup>
        </div>
    );
}

export default TopNavigation;