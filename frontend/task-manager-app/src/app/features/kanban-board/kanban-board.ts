import { SidePanel } from './../../core/services/side-panel';
import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { KanbanItem } from './kanban-item/kanban-item';
import { TaskForm } from '../tasks/task-form/task-form';

@Component({
  selector: 'app-kanban-board',
  imports: [CommonModule,DragDropModule, KanbanItem],
  templateUrl: './kanban-board.html',
  styleUrl: './kanban-board.scss',
})
export class KanbanBoard {
  constructor(private sidePanel: SidePanel) {}

  todo: { id: string; title: string; status: string; severity: string; type: string; dueDate: string }[] = [
    { id: '1', title: 'Thiết kế Database', status: 'todo', severity: 'High', type: 'Personal', dueDate: '2023-01-01' },
    { id: '2', title: 'Học Angular Standalone', status: 'todo', severity: 'Medium', type:'Work', dueDate: '2023-01-02' }
  ];

  backlog: { id: string; title: string; status: string; severity: string; type: string; dueDate: string }[] = [
    { id: '1', title: 'Thiết kế Database', status: 'backlog', severity: 'High', type: 'Personal', dueDate: '2023-01-01' },
    { id: '2', title: 'Học Angular Standalone', status: 'backlog', severity: 'Medium', type: 'Personal', dueDate: '2023-01-02' }
  ];

  inProgress: { id: string; title: string; status: string; severity: string; type: string; dueDate: string }[] = [
    { id: '3', title: 'Làm chức năng Drag & Drop', status: 'in-progress', severity: 'Medium', type: 'Work', dueDate: '2023-01-03' }
  ];

  done: { id: string; title: string; status: string; severity: string; type: string; dueDate: string }[] = [
    { id: '4', title: 'Cài đặt project', status: 'done', severity: 'Low', type: 'Work', dueDate: '2023-01-04' }
  ];

  cancelled: { id: string; title: string; status: string; severity: string; type: string; dueDate: string }[] = [
    { id: '5', title: 'Hủy bỏ chức năng', status: 'cancelled', severity: 'Low', type: 'Personal', dueDate: '2023-01-05' }
  ];

  boardColumns = [
    { name: 'BACKLOG', tasks: this.backlog, status: 'backlog' },
    { name: 'TO DO', tasks: this.todo, status: 'todo' },
    { name: 'IN PROGRESS', tasks: this.inProgress, status: 'in-progress' },
    { name: 'DONE', tasks: this.done, status: 'done' },
    { name: 'CANCELLED', tasks: this.cancelled, status: 'cancelled' }
  ];

  onDrop(event: CdkDragDrop<{ id: string; title: string; status: string; severity: string; type: string; dueDate: string }[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data, 
        event.previousIndex, 
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  onTaskClick(task: any) {
    this.sidePanel.open(TaskForm, { task });
  }
}
