import React from 'react';
import { MDBCard, MDBCardBody, MDBIcon, MDBRow, MDBCol } from 'mdbreact';



class AdminCardSection1 extends React.Component {
  constructor(){
    super();
    this.state = {
       data:{},
       employeesTotal:""
      }
    };
  


componentDidMount(){
  fetch('http://localhost:5000/api/statistics/all')
  .then( (response) => response.json())
  .then( (info) => this.setState({
    data:info,
    employeesTotal:info.employeesTotal})
  )


}


render(){
const employees = this.state.data.employeesTotal;
let avg = 0;
let n = 0;
for(let i in this.state.data.salaries)
{ 
  avg+=this.state.data.salaries[i].salary;
  n++;
}
avg = Math.round((avg/n) * 100) / 100

  return (
   <MDBRow className="mb-4">
        <MDBCol xl="6" md="6" className="mb-3">
          <MDBCard color="primary-color" className="classic-admin-card">
            <MDBCardBody>
              <div className="float-right">
              <MDBIcon far icon="money-bill-alt"/>
              </div>
              <p className="white-text">NUMBER OF EMPLOYEES</p>
              <h4><strong>{this.state.employeesTotal}</strong></h4>
            </MDBCardBody>
            <div className="progress">
              <div aria-valuemax="100" aria-valuemin="0" width={employees} aria-valuenow={this.state.employeesTotal} className="progress-bar bg grey darken-3" role="progressbar" style={{width: "25%"}}></div>
            </div>

          </MDBCard>
        </MDBCol>
        <MDBCol xl="6" md="6" className="mb-3">
          <MDBCard color="warning-color" className="classic-admin-card">
            <MDBCardBody>
              <div className="float-right">
              <MDBIcon icon="chart-line"/>
              </div>
              <p className="white-text">AVERAGE SALARY</p>
              <h4><strong>{avg}</strong></h4>
            </MDBCardBody>
            <div className="progress">
              <div aria-valuemax="100" aria-valuemin="0" width="75" aria-valuenow={avg} className="progress-bar bg grey darken-3" role="progressbar" style={{width: "25%"}}></div>
            </div>
      
          </MDBCard>
        </MDBCol>
        </MDBRow>
  

  )
};
};
export default AdminCardSection1;

