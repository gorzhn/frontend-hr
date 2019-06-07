import React from 'react'
import { MDBRow, MDBIcon, MDBCol, MDBCard, MDBCardBody, MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact';
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


    const data = this.state.data
    console.log(data);
    
    const prev = this.state.asc;
    let name = event.target.getAttribute('name'); 
    console.log(name);
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

  //loso resenie so sortiranjeto
  //O(N^2) kompleksnost

        componentDidMount(){
            Promise.all([
            fetch('http://localhost:5000/api/employees/all'),
            fetch('http://localhost:5000/api/jobs/all'),
            fetch('http://localhost:5000/api/departments/all')
        ]).then(([res1, res2, res3]) => Promise.all([res1.json(), res2.json(), res3.json()]))
          .then(([data1, data2, data3]) => {
              for(let i = 0 ; i < data1.length; i++){
                for(let j = 0 ; j < data2.length; j++){
                    if(data1[i].jobId === data2[j].jobId){
                      data1[i].jobId = data2[j].jobName;
                    }
                }
              }
              for(let i = 0 ; i < data1.length; i++){
                for(let j = 0 ; j < data3.length; j++){
                    if(data1[i].departmentId === data3[j].departmentId){
                      data1[i].departmentId = data3[j].departmentName
                    }
                }
              }
              this.setState({"data":data1})
              }

            )}




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
                <button  id={num.embg} name={num.embg} color="primary" size="sm" onClick={this.handleTermination} className="terminate-button"><MDBIcon fas icon="user-times" className="ml-2" /></button>
                </td>

                 
                  
              </tr> )
  return (
    <React.Fragment>
    <div>      
       <Autocomplete classes={"search-input form-control form-control-sm ml-3 w-75"}
/>
</div>
      <MDBTable>
      <MDBTableHead color="primary-color" textWhite>
        <tr>
          
                  <th  onClick={this.onSort} name="firstName">First Name</th>
                  <th onClick={this.onSort} name="lastName">Last Name</th>
                  <th onClick={this.onSort} name="jobId">Position</th>
                  <th onClick={this.onSort} name="dateHired">Start Date</th>
                  <th onClick={this.onSort} name="salary">Salary</th>
                  <th onClick={this.onSort} name="embg">Embg</th>
                  <th onClick={this.onSort} name="departmentId">Department</th>
                  <th  name="">Details</th>
                  <th  name="">Delete</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {tabledata}
      </MDBTableBody>
    </MDBTable>
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

          </React.Fragment>
  )
}
}
export default TablesPage;






