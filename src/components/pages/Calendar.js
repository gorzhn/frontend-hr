import React from 'react';
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import events from './events.js';
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
  fetch('https://api.myjson.com/bins/13yjkv')
  .then(response => response.json())
  .then(info=> {
  	for(let i = 0 ; i < info.length; i++){
  		info[i].start = new Date(info[i].start);
  		info[i].end = new Date(info[i].end);
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
      startAccessor="start"
      endAccessor="end"
    />
  </div>
  )
  	}
  }
export default Calendar;
