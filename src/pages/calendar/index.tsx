import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import FullCalendar from "@fullcalendar/react";
import React from "react";

export default function index() {
  const calendarRef = React.useRef(null);

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        initialView="timeGridWeek"
        timeZone="local"
        headerToolbar={{
          left: "prev next today",
          center: "title",
          right: "timeGridWeek,timeGridDay,listWeek",
        }}
        ref={calendarRef}
        slotMinTime="07:00"
        slotMaxTime="20:00"
        events={[
          {
            title: "test1",
            start: "2023-05-28T12:30:00",
            end: "2023-05-28T13:30:00",
          },
          {
            title: "test2",
            start: "2023-05-28T13:30:00",
            end: "2023-05-28T14:30:00",
          },
          {
            title: "test3",
            start: "2023-05-28T14:30:00",
            end: "2023-05-28T15:30:00",
          },
        ]}
        height="90vh"
      />
    </div>
  );
}
