import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import FullCalendar from "@fullcalendar/react";
import React, { useEffect } from "react";
import useCalendar from "@/hooks/useCalendar";

export default function index() {
  const calendarRef = React.useRef(null);
  const { data } = useCalendar()

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
        events={
          data?.map(element => {
            return {
              title: element.owner,
              start: element.startDatetime,
              end: element.endDatetime,
              color: "green"
            }
          })
        }
        height="90vh"
      />
    </div>
  );
}
