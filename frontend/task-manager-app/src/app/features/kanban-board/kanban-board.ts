import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { KanbanItem } from './kanban-item/kanban-item';

@Component({
  selector: 'app-kanban-board',
  imports: [CommonModule,DragDropModule, KanbanItem],
  templateUrl: './kanban-board.html',
  styleUrl: './kanban-board.scss',
})
export class KanbanBoard {
  todo: { id: string; title: string; severity: string; type: string; createdDate: string }[] = [
    { id: '1', title: 'Thiết kế Database', severity: 'High', type: 'Personal', createdDate: '2023-01-01' },
    { id: '2', title: 'Học Angular Standalone', severity: 'Medium', type:'Work', createdDate: '2023-01-02' }
  ];

  backlog: { id: string; title: string; severity: string; type: string; createdDate: string }[] = [
    { id: '1', title: 'Thiết kế Database', severity: 'High', type: 'Personal', createdDate: '2023-01-01' },
    { id: '2', title: 'Học Angular Standalone', severity: 'Medium', type: 'Personal', createdDate: '2023-01-02' }
  ];

  inProgress: { id: string; title: string; severity: string; type: string; createdDate: string }[] = [
    { id: '3', title: 'Làm chức năng Drag & Drop', severity: 'Medium', type: 'Work', createdDate: '2023-01-03' }
  ];

  done: { id: string; title: string; severity: string; type: string; createdDate: string }[] = [
    { id: '4', title: 'Cài đặt project', severity: 'Low', type: 'Work', createdDate: '2023-01-04' }
  ];

  cancelled: { id: string; title: string; severity: string; type: string; createdDate: string }[] = [
    { id: '5', title: 'Hủy bỏ chức năng', severity: 'Low', type: 'Personal', createdDate: '2023-01-05' }
  ];

  boardColumns = [
    { name: 'BACKLOG', tasks: this.backlog },
    { name: 'TO DO', tasks: this.todo },
    { name: 'IN PROGRESS', tasks: this.inProgress },
    { name: 'DONE', tasks: this.done },
    { name: 'CANCELLED', tasks: this.cancelled }
  ];

  onDrop(event: CdkDragDrop<{ id: string; title: string; severity: string; type: string; createdDate: string }[]>) {
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
}
