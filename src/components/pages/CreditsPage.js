import React from 'react';
import students from './students.js'
import '../../styles/Credits.css';
const CreditsPage = () => {


function Click (){
  var obj = {
    UserName:"ViktorijaM",
    Password:"0000"
  }
  console.log(obj);

  fetch('http://localhost:5000/api/Authentication/Login', {
    method:'post',

    body:JSON.stringify(obj),
    headers:{
      'Content-Type':'application/json'},

  })
  .then(response => response.json())
  .then(info => {
    console.log(info.token);
    localStorage.setItem('token',info.token)})
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

	<div className="container-students" id="div1">
  <button onClick={Click}>Testing Button</button>
  <button onClick={Click2}>Testing Login</button>
  <div className="card">
    <h1 className="title">Student 1</h1>
      <div className="input-container">
        <input disabled defaultValue={students[0].indeks}  />
        <label  ></label>
        <div className="bar">indeks</div>
      </div>
      <div className="input-container">
        <input disabled defaultValue={students[0].ime}   />
        <label  ></label>
        <div className="bar">Ime</div>
      </div>
      <div className="input-container">
        <input disabled defaultValue={students[0].prezime}  type="text"   />
        <label  ></label>
        <div className="bar">Prezime</div>
      </div>
  </div>
  <div className="card">
    <h1 className="title">Student 2</h1>
      <div className="input-container">
        <input disabled defaultValue={students[1].indeks}  />
        <label  ></label>
        <div className="bar">indeks</div>
      </div>
      <div className="input-container">
        <input disabled defaultValue={students[1].ime}  />
        <label  ></label>
        <div className="bar">Ime</div>
      </div>
      <div className="input-container">
        <input disabled defaultValue={students[1].prezime}   />
        <label  ></label>
        <div className="bar">Prezime</div>
      </div>
  </div>
  <div className="card">
    <h1 className="title">Student 3</h1>
      <div className="input-container">
        <input disabled defaultValue={students[2].indeks}/>
        <label  ></label>
        <div className="bar">indeks</div>
      </div>
      <div className="input-container">
        <input disabled defaultValue={students[2].ime} />
        <label  ></label>
        <div className="bar">Ime</div>
      </div>
      <div className="input-container">
        <input disabled defaultValue={students[2].prezime}  />
        <label  ></label>
        <div className="bar">Prezime</div>
      </div>
  </div>

</div>

	)

}

export default CreditsPage;