import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
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
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h5 text-center mb-4">Sign up</p>
            <div className="grey-text">
              <MDBInput
                onChange={this.onChange} label="User Name"
                icon="user"
                group
                name="username"
                type="text"
                validate
                error="wrong"
                success="right"
              />
              


              <MDBInput
                onChange={this.onChange} label="Embg"
                icon="envelope"
                group
                name="embg"
                type="email"
                validate
                error="wrong"
                success="right"
              />

              <MDBInput
                onChange={this.onChange} label="Full Name"
                icon="envelope"
                group
                name="fullname"
                type="text"
                validate
                error="wrong"
                success="right"
              />



              
              <MDBInput
                onChange={this.onChange} label="Your password"
                icon="lock"
                group
                name="password"
                type="password"
                validate
              />
              <MDBInput
                 label="Confirm password"
                icon="exclamation-triangle"
                group
                type="password"
                validate
                error="wrong"
                success="right"
              />
            </div>
            <div className="text-center">
              <MDBBtn onClick={this.submit} color="primary">Register</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
)
)
}
}


export default Register;




