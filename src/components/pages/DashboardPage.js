import React from 'react';
import { MDBRow } from 'mdbreact';
import AdminCardSection1 from './sections/AdminCardSection1';
import ChartSection1 from './sections/ChartSection1';
import Autocomplete from './sections/Search';


class DashboardPage extends React.Component  {
 constructor(){
  super();
  this.state = {};
 }

  render(){
  return (


    <React.Fragment>

<div>      
       <Autocomplete classes={"search-input form-control form-control-sm ml-3 w-75"}
/>
         


</div>
      <AdminCardSection1 />
      <ChartSection1 />
      <MDBRow className="mb-4">
      </MDBRow>
    </React.Fragment>
  )
}
}

export default DashboardPage;