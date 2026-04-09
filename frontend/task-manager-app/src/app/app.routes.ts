import { Routes } from '@angular/router';
import { KanbanBoard } from './features/kanban-board/kanban-board';
import { CalendarBoard } from './features/calendar-board/calendar-board';

export const routes: Routes = [
    { path: '', component: KanbanBoard },           
    { path: 'kanban', component: KanbanBoard },
    {path: 'calendar', component: CalendarBoard},   
    { path: '**', redirectTo: '' }
];
