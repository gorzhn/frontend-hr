import React from "react";
import { MDBListGroup, MDBListGroupItem, MDBIcon } from "mdbreact";
import { NavLink } from "react-router-dom";
import { ToastsContainer, ToastsStore } from "react-toasts";

class AdminSideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <MDBListGroup className="list-group-flush">
          <NavLink exact={true} to="/dashboard" activeClassName="activeClass">
            <MDBListGroupItem>
              <MDBIcon icon="chart-pie" className="mr-3" />
              Company Analytics{" "}
            </MDBListGroupItem>
          </NavLink>
          <NavLink to="/tables" activeClassName="activeClass">
            <MDBListGroupItem>
              <MDBIcon icon="users" className="mr-3" />
              Employees
            </MDBListGroupItem>
          </NavLink>
          <NavLink to="/add" activeClassName="activeClass">
            <MDBListGroupItem>
              <MDBIcon icon="user-plus" className="mr-3" />
              Insert Employee{" "}
            </MDBListGroupItem>
          </NavLink>
          <NavLink to="/calendar" activeClassName="activeClass">
            <MDBListGroupItem>
              <MDBIcon icon="calendar-alt" className="mr-3" />
              Events Calendar
            </MDBListGroupItem>
          </NavLink>
          <NavLink to="/events" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="calendar-day" className="mr-3"/>
                        Events Information
                    </MDBListGroupItem>
                </NavLink>
          <NavLink to="/addevent" activeClassName="activeClass">
            <MDBListGroupItem>
              <MDBIcon icon="calendar-plus" className="mr-3" />
              Add Event
            </MDBListGroupItem>
          </NavLink>
          

          <NavLink to="/leaves" activeClassName="activeClass">
            <MDBListGroupItem>
              <MDBIcon icon="calendar-plus" className="mr-3" />
              Leaves
            </MDBListGroupItem>
          </NavLink>


          <NavLink to="/credits" activeClassName="activeClass">
            <MDBListGroupItem>
              <MDBIcon icon="user" className="mr-3" />
              Credits
            </MDBListGroupItem>
          </NavLink>
        </MDBListGroup>
      </React.Fragment>
    );
  }
}
export default AdminSideNav;
