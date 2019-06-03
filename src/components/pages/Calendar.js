import React from 'react';
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import events from './events.js';
import 'react-big-calendar/lib/css/react-big-calendar.css';
const localizer = BigCalendar.momentLocalizer(moment)

const Calendar = props => (
  <div>
    <BigCalendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
    />
  </div>
)
export default Calendar;
