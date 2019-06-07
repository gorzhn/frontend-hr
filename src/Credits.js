import React from 'react';
import students from './students.js'
import '../../styles/Credits.css';
const CreditsPage = () => {

function onClick(e){
console.log(e.target)
}



function Click2(){
    var bearer = 'Bearer ' + localStorage.getItem('token');
    console.log(localStorage.getItem('token'));
  fetch('http://localhost:5000/api/UserProfile', {
    method:'get',
    withCredentials: true,
    headers:{
      'Content-Type':'application/json',
      'Authorization': bearer
    },

  })
  .then(response => response.json())
  .then(info => console.log(info));

}

return (
<div onClick={onClick} name="administrator" className="card-wrapper">
<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src='https://www.w3schools.com/howto/img_avatar.png' style={{'width':'300px',  'height':'300px'}}/>
    </div>
    <div className="flip-card-back">
      <h1>Login as </h1> 
      <p>Administrator</p> 
      
    </div>
  </div>
</div>
<div onClick={onClick} name="user" className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src='https://www.w3schools.com/howto/img_avatar.png' style={{'width':'300px',  'height':'300px'}}/>
    </div>
    <div className="flip-card-back">
      <h1>Login as </h1> 
      <p>User</p> 
      
    </div>
  </div>
</div>
</div>
	)

}
export default CreditsPage;