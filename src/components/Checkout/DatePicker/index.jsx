import { useState, createRef } from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';

const today = new Date();

export default function DatePicker() {
  const [, setValue] = useState(null);

  const calendarRef = createRef();

  return (
    <>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        validRange={{
          start: today,
        }}
        dateClick={function (arg) {
          let calendarApi = calendarRef.current.getApi();
          calendarApi.select(arg.date);
          setValue(arg.dateStr);
        }}
      />
    </>
  );
}
