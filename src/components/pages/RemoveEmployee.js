import React from 'react'
import "../../styles/InsertEmployee.css";
import "../../styles/MyProfile.css";

class RemoveEmployee extends React.Component {
constructor(){
  super();
  this.state = {
embg:""
  };
  this.handleNext = this.handleNext.bind(this);
  this.handleChange = this.handleChange.bind(this);
}

handleChange(e){
  this.setState({[e.target.name]:e.target.value})
  console.log(this.state.embg);
}

handleNext(){
let str = this.state.embg;
   fetch('https://projectwp.azurewebsites.net/api/employees/delete', {
        method: 'post',
        body: str,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((res) => console.log(res));


}

render(){
  return(
    <div className="container" id="div1">
  
  <div className="card">
    <h1 className="title">Enter Employee Information for Termination</h1>
    <form>
      <div className="input-container">
        <input onChange={this.handleChange} name="embg" type="text"   id="#{label}"  />
        <label ></label>
        <div className="bar">Embg</div>
      </div>
    
        <p onClick={this.handleNext} className="next-button">Next</p>
      

    </form>
  </div>
</div>

    )
}


}


export default RemoveEmployee;
