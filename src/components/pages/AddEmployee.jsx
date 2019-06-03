import React from 'react';
import "../../styles/InsertEmployee.css";
import "../../styles/MyProfile.css";
import {MDBBtn, MDBRow, MDBCol, MDBCard } from 'mdbreact';
import '../../styles/Details.css';
import Select from './sections/Select.js';
import SelectJob from './sections/SelectJob.js';
import Autocomplete from './sections/Search';
import '../../styles/Loader.css';

class AddEmployee extends React.Component{
  constructor(){
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmit2 = this.handleSubmit2.bind(this);
    this.onSelect = this.onSelect.bind(this); 
    this.onSelectJob = this.onSelectJob.bind(this); 
    
    this.calculateAge = this.calculateAge.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = {
      departments:[],
      jobs:[],
      embg:"",
      email:"",
      age:"",
      sex:"",
      birthDate:"",
      phone:"",
      address:"",
      city:"",
      country:"",
      firstName:"",
      lastName:"",
      jobId:"",
      dateHired:"",
      salary:"",
      departmentId:"",
      radio:"",
      hasMounted:false,




    }
  }


    
calculateAge(birthday) { // birthday is a date
  let bday = new Date(birthday);
    let ageDifMs = Date.now() - bday.getTime();
    let ageDate = new Date(ageDifMs); // miliseconds from epoch
    console.log(Math.abs(ageDate.getUTCFullYear()-1970));
    this.setState({age:Math.abs(ageDate.getUTCFullYear()-1970)});
}
handleChange(e){
  if(e.target.name === "birthDate"){
      this.calculateAge(e.target.value);
  }
  

this.setState( {[e.target.name]:e.target.value})

console.log(this.state[e.target.name]);
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
  
  

   fetch('http://localhost:5000/api/employees/create', {
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
  console.log(emp_info);
console.log("sending 2");
   fetch('http://localhost:5000/api/employees/create/info', {
        method: 'post',
       
        body: JSON.stringify(emp_info),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => console.log(res));

    
}

onClick(e){
  console.log(e.target.value);
this.setState( {[e.target.name]:e.target.value})
}

onSelect(e){
  let index = e.target.selectedIndex;
  let el = e.target.childNodes[index];
  let option =  el.getAttribute('name');
  console.log(option); 
  this.setState({
    departmentId:option
  })
}
onSelectJob(e){
  let index = e.target.selectedIndex;
  let el = e.target.childNodes[index];
  let option =  el.getAttribute('name');
  console.log(option); 
  this.setState({
    jobId:option
  })
}

componentDidMount(){
  let prev = this.state.hasMounted;
this.setState({hasMounted:!prev});
console.log("Mounted");
}



render(){
  return(
this.state.hasMounted ? (
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
              <input name="firstName" type="text"   onChange={this.handleChange} id="inputSMEx" className="form-control form-control-sm"/>
              <label htmlFor="inputSMEx"> </label>
      </div>
          
      <div className="md-form form-sm">
        <div><h6><strong>Last Name</strong></h6></div>  
            <input type="text" name="lastName" onChange={this.handleChange}  id="inputSMEx" className="form-control form-control-sm"/>
            <label htmlFor="inputSMEx"> </label>
        </div>
<div className="md-form form-sm">
  <div><h6><strong>Email</strong></h6></div>
    <input type="text" placeholder="example@mail.com" name="email"  onChange={this.handleChange} id="inputSMEx" className="form-control form-control-sm"/>
    <label htmlFor="inputSMEx"> </label>
  </div>
  <div className="md-form form-sm">
    <div><h6><strong>Phone</strong></h6></div>
    <input type="text" name="phone" placeholder="+38970200300"  onChange={this.handleChange} id="inputSMEx" className="form-control form-control-sm"/>
    <label htmlFor="inputSMEx"> </label>
  </div>
  <div>
  <input onChange={this.onClick} type="radio" name="sex" value="m"/><label> Male</label><br/>
  <input onChange={this.onClick} type="radio" name="sex" value='f'/><label> Female</label><br/>
  
  
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
  <input placeholder="12345678912 "type="text" name="embg"  onChange={this.handleChange} id="inputSMEx" className="form-control form-control-sm"/>
  <label htmlFor="inputSMEx"> </label>
</div>
      <div className="md-form form-sm">
      <div>Birth Date</div>
  <input type="date" name="birthDate"  onChange={this.handleChange} id="inputSMEx" className="form-control form-control-sm"/>
  <label htmlFor="inputSMEx"> </label>
</div>
 <div className="md-form form-sm">
      <div>Age</div>
  <input disabled type="text" name="age" value={this.state.age} onChange={this.handleChange} id="inputSMEx" className="form-control form-control-sm"/>
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
  <SelectJob onselect={this.onSelectJob}  />

  <label htmlFor="inputSMEx"> </label>
</div>
<div className="md-form form-sm">
<div>Department</div>
<Select onselect={this.onSelect} />
  <label htmlFor="inputSMEx"> </label>
</div>
<div className="md-form form-sm">
<div>Salary</div>
  <input placeholder="$" type="text" id="inputSMEx" name="salary" onChange={this.handleChange} className="form-control form-control-sm"/>
  <label htmlFor="inputSMEx"> </label>
</div>      
<div className="md-form form-sm">
<div>Hire Date</div>
  <input type="date" id="inputSMEx" name="dateHired" onChange={this.handleChange} className="form-control form-control-sm"/>
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
  <input type="text" name="address"  onChange={this.handleChange} id="inputSMEx" className="form-control form-control-sm"/>
  <label htmlFor="inputSMEx"> </label>
</div>
      <div className="md-form form-sm">
      <div>City</div>
  <input type="text" name="city"  onChange={this.handleChange} id="inputSMEx" className="form-control form-control-sm"/>
  <label htmlFor="inputSMEx"> </label>
</div>
<div className="md-form form-sm">
      <div>Country</div>
<input type="text" name="country" onChange={this.handleChange} id="inputSMEx" className="form-control form-control-sm"/>
   <label htmlFor="inputSMEx"> </label>
</div>

            </form>
        </MDBCard>
      </MDBCol>
      

         </div> 
    </MDBRow>
     <MDBBtn className="next-button" onClick={this.handleSubmit} color="primary">Save</MDBBtn>


</React.Fragment>

) :
<React.Fragment>      <div id="loading">
        
      </div>
      </React.Fragment>

    )
}
}


export default AddEmployee;
