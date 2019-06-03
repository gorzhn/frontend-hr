import React from 'react'
import {  MDBRow, MDBCol, MDBCard } from 'mdbreact';
import '../../styles/MyProfile.css';
import '../../styles/Details.css';
import Select from './sections/Select.js';
import SelectJob from './sections/SelectJob.js';
import Modal from './sections/Modal.js';
import Autocomplete from './sections/Search';

class MyProfile extends React.Component{
constructor(props){
super(props);
this.state = {
    display:false,
    embg:"",
    firstName:"",
    lastName:"",
      email:"",
      age:"",
      birthDate:"",
      phone:"",
      address:"",
      city:"",
      country:"",
      jobId:"",
      dateHired:"",
      salary:"",
      departmentId:"",
      sex:"",
}
this.handleChange= this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
this.showModal = this.showModal.bind(this);
this.onSelect = this.onSelect.bind(this);
};

onSelect(e){
  let index = e.target.selectedIndex;
  let el = e.target.childNodes[index];
  let option =  el.getAttribute('name');
  console.log(option); 
  this.setState({
    departmentId:option
  });
};

handleChange(e){

this.setState( {[e.target.name]:e.target.value});
  console.log(this.state[e.target.name]);
}

componentDidMount(){
console.log(this.props.location.state.key);
    Promise.all([
            fetch('http://localhost:5000/api/employees/employee/info/'+this.props.location.state.key),
            fetch('http://localhost:5000/api/employees/employee/'+this.props.location.state.key)
        ])
     .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
      .then(([data1, data2]) => {
        console.log(data2);
        this.setState({
                    email:data1.email,
        phone:data1.phone,
        embg:data1.embg,
        birthDate:data1.birthDate,
        address:data1.address,
        city:data1.address,
        country:data1.country,
        sex:data1.sex,
        age:data1.age ,
           firstName:data2.firstName,
          lastName:data2.lastName,
          jobId:data2.jobId,
          salary:data2.salary,
          departmentId:data2.departmentId,
          dateHired:data2.dateHired
      })});
  }

handleSubmit(){
  
  let employee = {
    FirstName:this.state.firstName,
    LastName:this.state.lastName,
    JobId:this.state.jobId,
    DateHired:this.state.dateHired,
    salary:this.state.salary,
    DepartmentId:this.state.departmentId,
    Embg:this.state.embg
  
  }
   fetch('http://localhost:5000/api/employees/update/' + this.state.embg, {
        method: 'post',
        body: JSON.stringify(employee),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((res) => console.log(res));

   this.handleSubmit2();

    
}
handleSubmit2(){
  let emp_info = {
    Embg:this.state.embg,
    country:this.state.country,
    email:this.state.email,
    age:this.state.age,
    sex:this.state.sex,
    birthDate:this.state.birthDate,
    phone:this.state.phone,
    address:this.state.address,
    city:this.state.city
  
  }
  console.log(emp_info)
console.log("sending 2");
   fetch('http://localhost:5000/api/employees/update/info/'+this.state.embg, {
        method: 'post',
       
        body: JSON.stringify(emp_info),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => console.log(res));

    
}
showModal(){
  const show = this.state.display;
  this.setState({display:!show});
  console.log("displayed modal");
}

render(){ 


return(


<React.Fragment>

<div>      
       <Autocomplete classes={"search-input form-control form-control-sm ml-3 w-75"}
/>
         


</div>
      <MDBRow className="theDamnRow">
      <div className="container">
      <MDBCol md="12" >
      
      <MDBCard className="mt-5">
            <h5 className="employees-title text-left"><strong>Basic Information</strong></h5>
      <form className="basic-info-form">
            <div className="md-form form-sm">
            <div><h6><strong>First Name</strong> </h6></div>
              <input name="firstName" type="text" defaultValue={this.state.firstName}  onChange={this.handleChange} id="inputSMEx" className="form-control form-control-sm"/>
              <label htmlFor="inputSMEx"> </label>
      </div>
          
      <div className="md-form form-sm">
        <div><h6><strong>Last Name</strong></h6></div>  
            <input type="text" name="lastName" defaultValue={this.state.lastName} onChange={this.handleChange} id="inputSMEx" className="form-control form-control-sm"/>
            <label htmlFor="inputSMEx"> </label>
        </div>
<div className="md-form form-sm">
  <div><h6><strong>Email</strong></h6></div>
    <input type="text" name="email" defaultValue={this.state.email} onChange={this.handleChange} id="inputSMEx" className="form-control form-control-sm"/>
    <label htmlFor="inputSMEx"> </label>
  </div>
  <div className="md-form form-sm">
    <div><h6><strong>Phone</strong></h6></div>
    <input type="text" name="phone" defaultValue={this.state.phone} onChange={this.handleChange} id="inputSMEx" className="form-control form-control-sm"/>
    <label htmlFor="inputSMEx"> </label>
  </div>      
      
            </form>
        </MDBCard>
      </MDBCol>
    <MDBCol md="12" >
        <MDBCard className="mt-5">
            <h5 className="employees-title text-left"><strong>Personal Information</strong></h5>
            <form className="personal-info-form">
            <div className="md-form form-sm">
            <div><h6><strong>Embg</strong></h6></div>
  <input type="text" name="embg" defaultValue={this.state.embg} onChange={this.handleChange} id="inputSMEx" className="form-control form-control-sm"/>
  <label htmlFor="inputSMEx"> </label>
</div>
      <div className="md-form form-sm">
      <div>Birth Date</div>
  <input type="date" name="birthDate" defaultValue={this.state.birthDate} onChange={this.handleChange} id="inputSMEx" className="form-control form-control-sm"/>
  <label htmlFor="inputSMEx"> </label>
</div>

   

            </form>
        </MDBCard>
      </MDBCol>
      <MDBCol md="12" >
        <MDBCard className="mt-5">
            <h5 className="employees-title text-left"><strong>Work Information</strong></h5>
            <form className="basic-info-form">
      
      <div className="md-form form-sm">
      <div>Position</div>
  <input type="text" id="inputSMEx" name="jobId" defaultValue={this.state.jobId} onChange={this.handleChange} className="form-control form-control-sm"/>
  <label htmlFor="inputSMEx"> </label>
</div>
<div className="md-form form-sm">
<div>Department</div>
  <input type="text" id="inputSMEx" name="departmentId" defaultValue={this.state.departmentId} onChange={this.handleChange} className="form-control form-control-sm"/>
  <label htmlFor="inputSMEx"> </label>
</div>
<div className="md-form form-sm">
<div>Salary</div>
  <input placeholder="$" type="text" id="inputSMEx" name="salary" defaultValue={this.state.salary} onChange={this.handleChange} className="form-control form-control-sm"/>
  <label htmlFor="inputSMEx"> </label>
</div>      
   <div className="md-form form-sm">
      <div>Hire Date</div>
  <input type="date" name="dateHired" defaultValue={this.state.dateHired} onChange={this.handleChange} id="inputSMEx" className="form-control form-control-sm"/>
  <label htmlFor="inputSMEx"> </label>
</div>  

            </form>
        </MDBCard>
      </MDBCol>
<MDBCol md="12" >
        <MDBCard className="mt-5">
            <h5 className="employees-title text-left"><strong>Living Information</strong></h5>
            <form className="basic-info-form">
      <div className="md-form form-sm">
      <div>Address</div>
  <input type="text" name="address" defaultValue={this.state.address} onChange={this.handleChange} id="inputSMEx" className="form-control form-control-sm"/>
  <label htmlFor="inputSMEx"> </label>
</div>
      <div className="md-form form-sm">
      <div>City</div>
  <input type="text" name="city" defaultValue={this.state.city} onChange={this.handleChange} id="inputSMEx" className="form-control form-control-sm"/>
  <label htmlFor="inputSMEx"> </label>
</div>
<div className="md-form form-sm">
      <div>Country</div>
      
  <input type="text" name="country" defaultValue={this.state.country} onChange={this.handleChange} id="inputSMEx" className="form-control form-control-sm"/>
  <label htmlFor="inputSMEx"> </label>
</div>

            </form>
        </MDBCard>
      </MDBCol>
      

         </div> 
    </MDBRow>

      <Modal onclick={this.handleSubmit} className="modal-button" display={this.state.display} />
</React.Fragment>
)
}
}

export default MyProfile