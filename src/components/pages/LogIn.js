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

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      redirect: false,
      showToaster: false
    };

    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.username);
  }
  submit(e) {
    var obj = {
      UserName: this.state.username,
      Password: this.state.password
    };

    fetch("http://localhost:5000/api/Authentication/Login", {
      method: "post",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(info => {
        if (info.token) {
          console.log(info.token);
          localStorage.setItem("token", info.token);
          this.setState({
            redirect: true,
            showToaster: false
          });
        } else {
          this.setState({ showToaster: true });
        }
      });
  }

  render() {
    return this.state.redirect ? (
      <Redirect to={{ pathname: "/dashboard" }} />
    ) : (
      <React.Fragment>
        <MDBRow>
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <p className="h4 text-center py-4">Login</p>
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
                <br />
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
                <div className="text-center py-4 mt-3">
                  <MDBBtn
                    className="btn btn-primary the-damn-button"
                    type="button"
                    onClick={this.submit}
                  >
                    Submit
                    <MDBIcon fas icon="user-check" className="ml-2" />
                  </MDBBtn>

                  <NavLink
                    to="/register"
                    className="btn btn-primary the-damn-button"
                  >
                    <span>Register </span>
                    <MDBIcon fas icon="user-plus" className="ml-2" />
                  </NavLink>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </React.Fragment>
    );
  }
}

export default LogIn;
