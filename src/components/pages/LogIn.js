import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import '../../styles/Login.css';
import {Redirect} from 'react-router';

class LogIn extends React.Component{
constructor(props){
super(props);
this.state = {
	username:"",
	password:"",
	redirect:false,
	showToaster:false

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
    Password:this.state.password
  }

    
  fetch('http://localhost:5000/api/Authentication/Login', {
    method:'post',

    body:JSON.stringify(obj),
    headers:{
      'Content-Type':'application/json'},

  })
  .then(response => response.json())
  .then(info => {
		if(info.token){
	    console.log(info.token);
    localStorage.setItem('token',info.token)
    this.setState({
    	redirect:true,
    	showToaster:false,
    })}
    else {
    	this.setState({showToaster:true})
    }
})
}

render(){
return(

	this.state.redirect ? (<Redirect to={{pathname:"/dashboard"}}/>)
	:(
   <div className="alternative-container">
		
      <MDBRow>
        <MDBCol md="6">
          <form onSubmit={this.submit}>
            <p className="h4 text-center mb-4">Login</p>
            <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
              Your username
            </label>
            <input 
            onChange={this.onChange}
              type="text"
              id="defaultFormLoginEmailEx"
              className="form-control"
              name="username"
            />
            <br />
            <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
              Your password
            </label>
            <input
            onChange={this.onChange}
              type="password"
              id="defaultFormLoginPasswordEx"
              className="form-control"
              name="password"
            />
            <div className="text-center mt-4">
              <MDBBtn onClick={this.submit} color="indigo" type="button" >Login</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </div>
)
)
}
}


export default LogIn;




