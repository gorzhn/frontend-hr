import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';
class AddEvent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      startDate:"",
      endDate:"",
      title:""


    };
    this.onChange=this.onChange.bind(this);
    this.handleClick=this.handleClick.bind(this);
  }


handleClick(){
  
  let event = {
    startDate:this.state.startDate,
    endDate:this.state.endDate,
    title:this.state.title
  
  }
  
  

   fetch('http://localhost:5000/api/Events', {
        method: 'post',
        body: JSON.stringify(event),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((res) => console.log(res));
}


  onChange(e){
    this.setState({[e.target.name]:e.target.value});
    console.log(this.state.title);
  }

  render(){
  return (
 
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              
                <p className="h4 text-center py-4">Add Event</p>
                
                
                <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light">

                Start Date
                </label>

                <input
                  name="startDate"
                  type="date"
                  id="defaultFormCardNameEx"
                  className="form-control"
                  onChange={this.onChange}
                />
                <label

                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light">

                End date
                </label>

                <input
                  name="endDate"
                  type="date"
                  id="defaultFormCardNameEx"
                  className="form-control"
                  onChange={this.onChange}
                />

                
                  <label
                  htmlFor="defaultFormCardEmailEx"
                  className="grey-text font-weight-light"
                >
                  Description
                </label>
                <textarea
                  type="textarea"
                  id="defaultFormCardEmailEx"
                  className="form-control"
                  name="title"
                  rows="2"
                  onChange={this.onChange}
                />
                <div className="text-center py-4 mt-3">
                  <MDBBtn onClick={this.handleClick} className="btn btn-outline-blue" type="submit">
                    Send
                    
                  </MDBBtn>
                </div>
              
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow> );
};
}

export default AddEvent;