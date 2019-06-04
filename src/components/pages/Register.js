import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';
import '../../styles/Login.css';
import {Redirect} from 'react-router'

class Register extends React.Component{
constructor(props){
super(props);
this.state = {
	username:"",
	password:"",
	email:"",
	embg:"",
	redirect:false

};
this.onChange = this.onChange.bind(this);
this.submit = this.submit.bind(this);
}
onChange(e){
this.setState({[e.target.name]:e.target.value})
}
submit(e){
	 var obj = {
    UserName:this.state.username,
    Password:this.state.password,
    Email:this.state.email,
    embg:this.state.embg
  }
console.log(obj);
    
  fetch('http://localhost:5000/api/Authentication/Register', {
    method:'post',

    body:JSON.stringify(obj),
    headers:{
      'Content-Type':'application/json'},

  })
  .then(response => response.json())
  .then(info => {
  	console.log(info);
  		if(info.succeeded){
  				this.setState({redirect:true});
  				console.log(this.state.redirect)
  			}
  });
}

render(){
return(
	this.state.redirect ? 
	(<Redirect to={{pathname:'/login'}}/>)
	 :(
   <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              
          
                <p className="h4 text-center py-4">Register</p>
                <label
                  htmlFor="defaultFormCardNameEx"
                  className="grey-text font-weight-light"
                >
                  Your username
                </label>
                 <input
                  type="text"
                  id="defaultFormCardNameEx"
                  className="form-control"
                  name="username"
                  onChange={this.onChange}
                />
                
                <label
                  htmlFor="defaultFormCardEmailEx"
                  className="grey-text font-weight-light"
                >
                  Your embg
                </label>
                <input
                  type="text"
                  id="defaultFormCardEmailEx"
                  className="form-control"
                  name="embg"
                  onChange={this.onChange}
                />
                  <label
                  htmlFor="defaultFormCardEmailEx"
                  className="grey-text font-weight-light"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="defaultFormCardEmailEx"
                  className="form-control"
                  name="fullname"
                  onChange={this.onChange}
                />
                  <label
                  htmlFor="defaultFormCardEmailEx"
                  className="grey-text font-weight-light"
                >
                  Your password
                </label>
                <input
                  type="password"
                  id="defaultFormCardEmailEx"
                  className="form-control"
                  name="password"
                  onChange={this.onChange}
                />
                  <label
                  htmlFor="defaultFormCardEmailEx"
                  className="grey-text font-weight-light"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  id="defaultFormCardEmailEx"
                  className="form-control"

                  onChange={this.onChange}
                />

<div className="text-center py-4 mt-3">
                  <MDBBtn className="btn btn-primary the-damn-button"  type="button" onClick={this.submit}>
                    Register
                    <MDBIcon fas icon="user-plus" className="ml-2" />
                  </MDBBtn>
                </div>

            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>

         
)
)
}
}

export default Register;