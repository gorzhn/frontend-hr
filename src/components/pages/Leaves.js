import React from 'react'
import { MDBRow, MDBContainer,MDBModalFooter, MDBIcon, MDBCol, MDBCard, MDBCardBody, MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact';
import { NavLink } from 'react-router-dom';
import '../../styles/TablesPage.css';
import {  MDBBtn, MDBModal, MDBModalBody, MDBModalHeader} from 'mdbreact';
import Autocomplete from './sections/Search';
import { MDBDataTable } from 'mdbreact';
import "../../styles/Leaves.css";
import { CSVLink, CSVDownload } from "react-csv";
import ModalLeaves from './sections/ModalLeaves.js';



class EventsTable extends React.Component {
toggle = function(e) {
  console.log(e)
  this.setState({
    modal: !this.state.modal
  });
}
   constructor(props){
    super(props);
    this.toggle = this.toggle.bind(this);


    this.state = {
          modal:false,
          leaveId: "",
          embg:"",
          title:"",
          endDate:"",
          startDate: "",
          status:"",


      data:{
        columns: [
      {
        label: 'Id',
        field: 'eventId',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Start Date',
        field: 'startDate',
        sort: 'asc',
        width: 270
      },
      {
        label: 'End Date',
        field: 'endDate',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Title',
        field: 'title',
        sort: 'asc',
        width: 100
      }
      
    ],
    rows:[]
    }
   }
   this.handleApprove = this.handleApprove.bind(this); 
   this.handleRefuse = this.handleRefuse.bind(this); 


  };

handleApprove(){
var obj = {
leaveId: this.state.leaveId,
embg:this.state.embg,
title:this.state.title,
endDate:this.state.endDate,
startDate: this.state.startDate,
status:"2"
}
fetch('http://localhost:5000/api/Leaves/update/' + this.state.leaveId, {
        method: 'post',
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': 'application/json'
        }
    })
.then(response => console.log(response.json()))

   this.setState({modal:!this.state.modal})
    




}

handleRefuse(){
var obj = {
leaveId: this.state.leaveId,
embg:this.state.embg,
title:this.state.title,
endDate:this.state.endDate,
startDate: this.state.startDate,
status:"3"
}
fetch('http://localhost:5000/api/Leaves/update/' + this.state.leaveId, {
        method: 'post',
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': 'application/json'
        }
    })
.then(response => console.log(response.json()))

   this.setState({modal:!this.state.modal})
    




}
 componentDidMount(){
  fetch('http://localhost:5000/api/leaves/all')
  .then(response => response.json())
  .then(info => {

                        

                        //// FIX THIS SHIT IMMEDIATELY !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    for(let i = 0 ; i < info.length; i++){
      info[i].startDate = (new Date(info[i].startDate).toLocaleString())
      info[i].endDate = (new Date(info[i].endDate).toLocaleString())
      info[i].clickEvent = () => {
        console.log(info[i].leaveId)
  this.setState({
    modal: !this.state.modal,
    leaveId:info[i].leaveId,
          
          leaveId: info[i].leaveId,
          embg:info[i].embg,
          title:info[i].title,
          endDate:info[i].endDate,
          startDate: info[i].startDate,
          status:info[i].status

  });
}
        if(info[i].status === 1) {
          info[i].status = "Pending";
        }
        else if (info[i].status === 2){
          info[i].status = "Approved"
        }
        else if (info[i].status === 3 )
        {
          info[i].status = "Denied";
        }
    }


   this.setState({
    data: {
    columns: [
      {
        label: 'Id',
        field: 'id',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Embg',
        field: 'embg',
        sort: 'asc',
        width: 150
      },
        {
          label: 'Description',
          field: 'title',
          sort: 'asc',
          width: 100
        },
      {
        label: 'Start Date',
        field: 'startDate',
        sort: 'asc',
        width: 270
      },
      {
        label: 'End Date',
        field: 'endDate',
        sort: 'asc',
        width: 200
      },
       {
        label: 'Status',
        field: 'status',
        sort: 'asc',
        width: 100
      }
      
    ],
            rows: info
    }
})
   })
 }



  render(){

  return (
<React.Fragment>
<div>      
       <Autocomplete classes={"search-input form-control form-control-sm ml-3 w-75"}
/>
         

<CSVLink filename="leaves-export.csv" style={{"float":"right","padding":"1em"}}data={this.state.data.rows}>Export as csv
<MDBIcon fas icon="file-csv" className="ml-2" /></CSVLink>

</div>
    <MDBDataTable className="leaves"
      striped
      bordered
      hover
      data={this.state.data}
    />




    
      <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
         <MDBModalBody>
        Select to approve or refuse this request          
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="primary" onClick={this.toggle}>Close</MDBBtn>
          <MDBBtn onClick={this.handleApprove} name="approve" color="success">Approve</MDBBtn>
          <MDBBtn onClick={this.handleRefuse} name="refuse" color="danger">Refuse</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    

</React.Fragment>
  );
}

}

export default EventsTable;



