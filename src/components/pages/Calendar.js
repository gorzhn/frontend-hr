import React from 'react';
import BigCalendar from 'react-big-calendar'
import moment from 'moment'

import 'react-big-calendar/lib/css/react-big-calendar.css';
const localizer = BigCalendar.momentLocalizer(moment)

class Calendar extends React.Component{
  constructor(props){
  	super(props)
  	this.state = {
  		data:[],
  	}
  }
  componentDidMount(){
  fetch('http://localhost:5000/api/Events')
  .then(response => response.json())
  .then(info=> {
  	for(let i = 0 ; i < info.length; i++){
  		info[i].startDate = new Date(info[i].startDate);
  		info[i].endDate = new Date(info[i].endDate);
  	}

  	console.log(info);
  	this.setState({data:info});

})
}
  	render(){
  		return(
  <div>
    <BigCalendar
      localizer={localizer}
      events={this.state.data}
      startAccessor="startDate"
      endAccessor="endDate"	
    />
  </div>
  )
  	}
  }
export default Calendar;
