import React from 'react'
import { MDBRow, MDBIcon, MDBCol, MDBCard, MDBCardBody, MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact';
import { NavLink } from 'react-router-dom';
import '../../styles/TablesPage.css';
import {  MDBBtn, MDBModal, MDBModalBody, MDBModalHeader} from 'mdbreact';
import Autocomplete from './sections/Search';
import { MDBDataTable } from 'mdbreact';
import "../../styles/Leaves.css";
import { CSVLink, CSVDownload } from "react-csv";


class EventsTable extends React.Component {
   constructor(props){
    super(props);
    this.state = {
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

  };
 componentDidMount(){
  fetch('http://localhost:5000/api/leaves/all')
  .then(response => response.json())
  .then(info => {

                        

                        //// FIX THIS SHIT IMMEDIATELY !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    for(let i = 0 ; i < info.length; i++){
      info[i].startDate = (new Date(info[i].startDate).toLocaleString())
      info[i].endDate = (new Date(info[i].endDate).toLocaleString())
      info[i].clickEvent = ()=>console.log(info[i].embg);
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
</React.Fragment>
  );
}

}

export default EventsTable;



