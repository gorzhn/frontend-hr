import React from 'react';
import students from './students.js'
import '../../styles/Credits.css';
const CreditsPage = () => {

return (

	<div className="container-students" id="div1">
  
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