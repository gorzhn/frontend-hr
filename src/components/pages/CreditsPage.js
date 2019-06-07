import React from 'react';
import students from './students.js'
import '../../styles/Credits.css';
  import { CSVLink, CSVDownload } from "react-csv";

const CreditsPage = () => {
 
const csvData = [
  ["firstname", "lastname", "email"],
  ["Ahmed", "Tomi", "ah@smthing.co.com"],
  ["Raed", "Labes", "rl@smthing.co.com"],
  ["Yezzi", "Min l3b", "ymin@cocococo.com"]
];
return (
  <div>
<CSVLink filename="employees-export" data={csvData}>Download me</CSVLink>

<CSVDownload data={csvData} target="_blank" />
	</div>
  )

}
export default CreditsPage;