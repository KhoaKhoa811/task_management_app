import { CommonModule } from '@angular/common';
import { Component, afterNextRender } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-calendar-board',
  imports: [FullCalendarModule, CommonModule],
  templateUrl: './calendar-board.html',
  styleUrl: './calendar-board.scss',
})
export class CalendarBoard {

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    headerToolbar: {
      left: 'title',
      center: '',
      right: 'prev,today,next' 
    },

    buttonText: {
      today: 'Today'
    },
    eventTimeFormat: { 
      hour: '2-digit', 
      minute: '2-digit', 
      meridiem: true,
      hour12: true   
    },
    
    events: [
      { title: 'Fix Bug CSS fsdfdsfgdzghdghdfhdhdg', start: '2026-04-09T09:00:00', className: 'event-severity-hot' },
      { title: 'Meeting', start: '2026-04-09T14:30:00', className: 'event-severity-medium' },
      { title: 'Học Angular', start: '2026-04-12T19:00:00', className: 'event-severity-low' }
    ]
  };
}
