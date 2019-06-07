import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBIcon
} from "mdbreact";
import "../../styles/Login.css";
import { Redirect } from "react-router";
import { NavLink } from "react-router-dom";

class RequestLeave extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
  embg:"",
  title:"",
  endDate:"",
  startDate:"",
  status:1
  
    };
    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  submit(e) {
    var obj = {
     embg:this.state.embg,
  title:this.state.title,
  endDate:this.state.endDate,
  startDate:this.state.startDate,
  status:this.state.status
    };
    console.log(obj);

    fetch("http://localhost:5000/api/Leaves/create", {
      method: "post",

      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json"
      }
    })
  }

  render() {
    return(
    
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <p className="h4 text-center py-4">Request Leave</p>
              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Your embg
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
                name="embg"
                onChange={this.onChange}
              />

              <label
                htmlFor="defaultFormCardEmailEx"
                className="grey-text font-weight-light"
              >
                The start date
              </label>
              <input
                type="date"
                id="defaultFormCardEmailEx"
                className="form-control"
                name="startDate"
                onChange={this.onChange}
              />
              <label
                htmlFor="defaultFormCardEmailEx"
                className="grey-text font-weight-light"
              >
                The end date
              </label>
              <input
                type="date"
                id="defaultFormCardEmailEx"
                className="form-control"
                name="endDate"
                onChange={this.onChange}
              />
              <label
                htmlFor="defaultFormCardEmailEx"
                className="grey-text font-weight-light"
              >
                Provide a reason
              </label>
              <input
                type="textarea"
                
                id="defaultFormCardEmailEx"
                className="form-control"
                name="title"
                onChange={this.onChange}
              />
              
              <div className="text-center py-4 mt-3">
               
                <MDBBtn
                  className="btn btn-primary the-damn-button"
                  type="button"
                  onClick={this.submit}
                >
                  Request
                  <MDBIcon fas icon="user-plus" className="ml-2" />
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    );
  }
}

export default RequestLeave;
