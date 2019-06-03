import React from 'react'
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact';
import { NavLink } from 'react-router-dom';
import '../../styles/TablesPage.css';
import {  MDBBtn, MDBModal, MDBModalBody, MDBModalHeader} from 'mdbreact';
import Autocomplete from './sections/Search';

class TablesPage extends React.Component {
   constructor(){
            super();
            
            this.state = {
                data:[],
                terminate:"",
                isOpen:false,
                embg:"",
                asc:true

            
            };
            
            this.handleTermination = this.handleTermination.bind(this);
            this.proceedTermination = this.proceedTermination.bind(this);
            this.handleModal = this.handleModal.bind(this);
            this.onSort = this.onSort.bind(this);	
            
        }

        handleModal(){
          let modal = this.state.isOpen;
          this.setState({isOpen:!modal});
        }

        handleTermination(e){
          let modal = this.state.isOpen;
          this.setState({embg:e.target.id});
          this.setState({isOpen:!modal});          
        }

        
proceedTermination(){ //bind this function
let str = this.state.embg;

   fetch('http://localhost:5000/api/employees/delete', {
        method: 'post',
        body: str,
        headers: {
            'Content-Type': 'application/json'
        }
    })

        
          let modal = this.state.isOpen;
          this.setState({isOpen:!modal})


}

  onSort(event, sortKey){


    const data = this.state.data;
    const prev = this.state.asc;
    let name = event.target.getAttribute('name'); 

   	if(this.state.asc === true){

   	 data.sort((a,b) => a[name].toString().localeCompare(b[name].toString()))
   	 this.setState({data})
}
	else {
	    data.sort((a,b) => b[name].toString().localeCompare(a[name].toString()))
    	this.setState({data})
    }
    this.setState({asc:!prev});
  }

        componentDidMount(){
            fetch('http://localhost:5000/api/employees/all')
            .then((response) => {

              return response.json();
             }
            )
            .then((info) => this.setState({data:info}));

            }



            render(){
            
              let tabledata = this.state.data.map( (num)=> <tr key={num.embg}>
                <td>
                  {num.firstName}
                </td>
                <td>
                  {num.lastName}
                </td>
                <td>
                  {num.jobId}
                </td>
                <td>
                  {num.dateHired}
                </td>
                <td>
                  {num.salary}
                </td>
                <td>
                  {num.embg}
                </td>
                <td>
                  {num.departmentId}
                </td>
                 <td> 
                <NavLink  className="details-button" to={{
                        pathname:'/details',
                        state:{
                          key:num.embg
                        },                       
                  }}>Details
                </NavLink>
                </td>
                  <td> 
                <button  id={num.embg} name={num.embg} color="primary" size="sm" onClick={this.handleTermination} className="terminate-button">X</button>
                </td>

                 
                  
              </tr> )
  return (
    <React.Fragment>
    <div>      
       <Autocomplete classes={"search-input form-control form-control-sm ml-3 w-75"}
/>
</div>
      <div>
      <MDBRow>
      <MDBCol md="12">
        <MDBCard className="mt-5">
            <h3 className="employees-title text-left"><strong>Company Employees</strong></h3>
           <MDBTable className="employee-table">
              <MDBTableHead>
                <tr>
                 <th  onClick={this.onSort} name="firstName">First Name <i className="fas fa-caret-down" aria-hidden="true"></i></th>
                  <th onClick={this.onSort} name="lastName">Last Name <i className="fas fa-caret-down" aria-hidden="true"></i></th>
                  <th onClick={this.onSort} name="jobId">Position <i className="fas fa-caret-down" aria-hidden="true"></i></th>
                  <th onClick={this.onSort} name="dateHired">Start Date <i className="fas fa-caret-down" aria-hidden="true"></i></th>
                  <th onClick={this.onSort} name="salary">Salary <i className="fas fa-caret-down" aria-hidden="true"></i></th>
                  <th onClick={this.onSort} name="embg">Embg <i className="fas fa-caret-down" aria-hidden="true"></i></th>
                  <th onClick={this.onSort} name="departmentId">Department Id <i className="fas fa-caret-down" aria-hidden="true"></i></th>
                  <th name="">Detailed View</th>
                  <th name="">Delete</th>
                  </tr>
              </MDBTableHead>
              <MDBTableBody>
               {tabledata}
              </MDBTableBody>
            </MDBTable>
        </MDBCard>
      </MDBCol>


        <MDBCol lg="6" className="mb-4">

                <MDBCardBody>
                 
                  <MDBRow>                   
                      <MDBCol md="3" className="mb-3">
                          <div className="text-center">
                              <MDBModal name="confirm-modal" isOpen={this.state.isOpen} >
                                <MDBModalHeader>Confirmation</MDBModalHeader>
                                <MDBModalBody className="text-center">
                                <span>Are you sure you want to proceed with terminating this employee.
                                This action is irreversible and will be logged.<br/></span>
                                <MDBBtn onClick={this.proceedTermination} color="danger" className="terminate-button" >Proceed</MDBBtn>
                                 <MDBBtn onClick={this.handleModal} color="info" className="details-button" >Cancel</MDBBtn>
                               
                                </MDBModalBody>
                              </MDBModal>
                      
                          </div>
                      </MDBCol>
                   
                  </MDBRow>
                  </MDBCardBody>

              </MDBCol>

    </MDBRow>
    </div>
    </React.Fragment>
  )
}
}
export default TablesPage;