import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import esLocale from '@fullcalendar/core/locales/es';
import '../../assets/styles/style_Calendar/Calendar.css';

export default function CalendarView() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (clickInfo) => {
    setSelectedEvent(clickInfo.event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="calendar">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        locale={esLocale}
        headerToolbar={{
          left: 'prev,next',
          center: 'title',
          right: 'today'
        }}
        events={[
          {
            title: 'Ecoparque móvil',
            start: '2026-02-23',
            end: '2026-02-25',
            extendedProps: {
              description:
                "El aparcamiento de Las Palmeras acoge una nueva visita del Ecoparque móvil de la Emtre."
            },
            backgroundColor: "#E7A5F0",
            borderColor: "#E7A5F0"
          },
          {
            title: 'Día de andalucía',
            start: '2026-02-22',
            end: '2026-02-22',
            extendedProps: {
              description:
                "Burjassot acoge la celebración del Día de Andalucía en la Comunidad Valenciana."
            },
            backgroundColor: "#F0BD6C",
            borderColor: "#F0BD6C"
          },
          {
            title: 'Donación de sangre',
            start: '2026-02-16',
            end: '2026-02-16',
            extendedProps: {
              description:
                "El hall del Ayuntamiento acoge una nueva jornada solidaria de donación de sangre."
            },
            backgroundColor: "#fd6d6d",
            borderColor: "#fd6d6d"
          },
          {
            title: 'Rutas culturales',
            start: '2026-03-21',
            end: '2026-03-21',
            extendedProps: {
              description:
                "Burjassot ofrece nuevas rutas culturales gratuitas en los meses de marzo, abril y mayo."
            },
            backgroundColor: "#96c56a",
            borderColor: "#96c56a"
          }
        ]}
        eventClick={handleEventClick}
      />

      {selectedEvent && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedEvent.title}</h2>
            <p>{selectedEvent.extendedProps.description}</p>
            <button onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}
