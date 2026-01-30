import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import "/src/assets/calendar.css";

export default function CalendarView({ variant = "default" }) {
  return (
    <div className={`calendar ${variant}`}>
        <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
                left: 'prev,next',
                center: 'title',
                right: 'today'
            }}
            events={[
            {
                title: 'Mi primer evento',
                start: '2026-01-27',
                end: '2026-01-27'
            }
            ]}
            
        />
    </div>
    
  )
}
