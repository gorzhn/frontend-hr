import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';
import '../styles/switch.css';
import {ToastsContainer, ToastsStore} from 'react-toasts';
import AdminSideNav from './pages/AdminSideNav.jsx';
import UserSideNav from './pages/UserSideNav.jsx';

class TopNavigation extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            admin:true
        };
    }
    render(){
        var str = this.state.admin  ? "Switched to User" :"Switched to Admin";
    return (
<React.Fragment>
        <div className="sidebar-fixed position-fixed">
        <div className="toggle-container">
            <label className="switch"  style={{background:"#007bff"}}><input type="checkbox" onChange={()=> {
            this.setState({admin:!this.state.admin});
            ToastsStore.success(str)}

            } />    <div></div>

  </label>    
        <ToastsContainer position={"top_right"} store={ToastsStore} />
  </div>
  {this.state.admin ? ( 
    <AdminSideNav/>
            ) : <UserSideNav/>} 

        </div>
        </React.Fragment>
    );
}
}

export default TopNavigation;