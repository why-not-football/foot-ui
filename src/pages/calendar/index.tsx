import timeGridPlugin from '@fullcalendar/timegrid'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
import FullCalendar from '@fullcalendar/react'
import React, { useRef, useState } from 'react'

export default function index() {
  const calendarRef = React.useRef(null);

  return (
    <div style={{ width: '90vw'}}>
     <FullCalendar
        plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin,  ]}
        initialView="timeGrid"
        timeZone='local'
        headerToolbar={{
          left: "prev, next today",
          center: "title",
          right: "timeGridWeek,timeGridDay"
        }}
        ref={calendarRef}
        events={[
          { title: 'test1', start: '2023-05-28T12:30:00', end: '2023-05-28T13:30:00' },
          { title: 'test2', start: '2023-05-28T13:30:00', end: '2023-05-28T14:30:00' },
          { title: 'test3', start: '2023-05-28T14:30:00', end: '2023-05-28T15:30:00' } 
        ]}
        height="90vh"
      />
    </div>
  )
}
