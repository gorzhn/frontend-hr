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

</div>
	)

}
export default CreditsPage;