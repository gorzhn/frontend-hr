import React from 'react';
import '../../styles/Update.css';


class Update extends React.Component{
constructor(){
	super();
	this.state={
		embg:"",
		name:"",
		lname:"",
			email:"",
			age:"",
			
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
	};
	this.handleClick = this.handleClick.bind(this);
	this.handleChange = this.handleChange.bind(this);
	this.handleConfirm = this.handleConfirm.bind(this);
	this.handleNext = this.handleNext.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleBack = this.handleBack.bind(this);


}

handleBack(e){
    e.preventDefault();
  document.getElementById('div3').style.display ="block";
  document.getElementById('div4').style.display ="none";

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
	

	 fetch('https://projectwp.azurewebsites.net/api/employees/update/' + this.state.embg, {
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
console.log("sending 2");
	 fetch('https://projectwp.azurewebsites.net/api/employees/update/info/'+this.state.embg, {
        method: 'post',
       
        body: JSON.stringify(emp_info),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => console.log(res));

    
}

handleNext(e){
	e.preventDefault();
	document.getElementById('div3').style.display ="none";
	document.getElementById('div4').style.display ="block";

}

handleChange(e){

this.setState( {[e.target.name]:e.target.value});
	console.log(this.state.embg);
}

	
handleClick(){
	 fetch("https://projectwp.azurewebsites.net/api/employees/employee/"+this.state.embg)
    .then((response) => response.json())
    .then((info)=> {
    	console.log(info);
    	this.setState({name:info.firstName, lname:info.lastName});

    })
}

    handleConfirm(){
      document.getElementById('card-grid11').style.display='none';
      document.getElementById('card-grid12').style.display='none';
    	document.getElementById('div3').style.display='block';
    }


  	


	render(){


		return(
<React.Fragment>
	<div className="container-students" >
<div className="card card-grid11" id="card-grid11">
    <h1 className="title">Find Employee</h1>
      <div className="input-container">
        <input name="embg" onChange={this.handleChange} type="text"  />
        <label  ></label>
        <div className="bar">embg</div>
        
      </div>
      <button className="search-button" onClick={this.handleClick}>Search</button>
	</div>
	
	<div className='card card-grid11' id="card-grid12">
		<h1 className="title">Confirm Employee </h1>
      <div className="input-container">
        <input defaultValue={this.state.name} disabled type="text"  />
        <label  ></label>
        <div className="bar">First Name</div>
        
      </div>
      <div className="input-container">
        <input defaultValue={this.state.lname} disabled type="text"  />
        <label  ></label>
        <div className="bar">Last Name</div>
        
      </div>
<button onClick={this.handleConfirm} className="search-button">Confirm</button>
	</div>      
  </div>
  

<div className="profile-card"  >
<fieldset className="profile-interface">

<div className="container" id="div3" >
  
  <div className="card">
    <h1 className="title">Employee Information</h1>
    <form>
      <div className="input-container">
        <input disabled type="text" defaultValue={this.state.embg}  id="#{label}"  />
        <label  ></label>
        <div className="bar">Embg</div>
      </div>
      <div className="input-container">
        <input name="email" type="text" defaultValue="Dame" onChange={this.handleChange}  />
        <label  ></label>
        <div className="bar">Email</div>
      </div>
      <div className="input-container">
        <input name="age" type="text" onChange={this.handleChange}  />
        <label  ></label>
        <div className="bar">Age</div>
      </div>
      <div className="input-container">
        <input name="sex" type="text" onChange={this.handleChange}  />
        <label  ></label>
        <div className="bar">Sex
      </div>
      </div>
      <div className="input-container">
        <input name="birthDate" type="date" onChange={this.handleChange}  />
        <label  ></label>
        <div className="bar">Birth Date
      </div>
      </div>
      <div className="input-container">
        <input name="phone" type="text" onChange={this.handleChange}  />
        <label  ></label>
        <div className="bar">Phone
      </div>
      </div>
      <div className="input-container">
        <input name="address"type="text" onChange={this.handleChange}  />
        <label  ></label>
        <div className="bar">Address
      </div>
      </div>
      <div className="input-container">
        <input name="city" type="text" onChange={this.handleChange}  />
        <label  ></label>
        <div className="bar">City
      </div>
      </div>
      <div className="input-container">
        <input name="country" type="text" onChange={this.handleChange}  />
        <label  ></label>
        <div className="bar">Country
      </div>
      </div>
 	    	<p onClick={this.handleNext} className="next-button">Next</p>
      

    </form>
  </div>
</div>

 
<div className="container" id="div4">
  
  <div className="card">
    <h1 className="title">Employee Information</h1>
    <form>
      <div className="input-container">
        <input name="firstName" type="text"  onChange={this.handleChange}  id="#{label}"  />
        <label  ></label>
        <div className="bar">First Name</div>
      </div>
      <div className="input-container">
        <input name="lastName" type="text" onChange={this.handleChange}  />
        <label  ></label>
        <div className="bar">Last Name </div>
      </div>
      <div className="input-container">
        <input name="jobId" type="text" onChange={this.handleChange}  />
        <label  ></label>
        <div className="bar">Job Id</div>
      </div>
      <div className="input-container">
        <input name="dateHired" type="date" onChange={this.handleChange}  />
        <label  ></label>
        <div className="bar">Date Hired
      </div>
      </div>
      <div className="input-container">
        <input name="salary" type="text" onChange={this.handleChange}  />
        <label  ></label>
        <div className="bar">Salary
      </div>
      </div>
      <div className="input-container">
        <input name="departmentId" type="text" onChange={this.handleChange}  />
        <label  ></label>
        <div className="bar">Department Id
      </div>
      </div>
      <p onClick={this.handleSubmit} className="next-button">Submit</p>
      <p onClick={this.handleBack} className="back-button">Back</p>
     
      

 	    	
         

    </form>
  </div>
</div>

 

</fieldset>



</div>
</React.Fragment>

)
	}
}
export default Update;