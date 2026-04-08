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
  todo: { id: string; title: string; description: string }[] = [
    { id: '1', title: 'Thiết kế Database', description: 'Testing' },
    { id: '2', title: 'Học Angular Standalone', description: 'Testing' }
  ];

  backlog: { id: string; title: string; description: string }[] = [
    { id: '1', title: 'Thiết kế Database', description: 'Testing' },
    { id: '2', title: 'Học Angular Standalone', description: 'Testing' }
  ];

  inProgress: { id: string; title: string; description: string }[] = [
    { id: '3', title: 'Làm chức năng Drag & Drop', description: 'Testing' }
  ];

  done: { id: string; title: string; description: string }[] = [
    { id: '4', title: 'Cài đặt project', description: 'Testing' }
  ];

  cancelled: { id: string; title: string; description: string }[] = [
    { id: '5', title: 'Hủy bỏ chức năng', description: 'Testing' }
  ];

  boardColumns = [
    { name: 'BACKLOG', tasks: this.backlog, color: '#bcbcbc' },
    { name: 'TO DO', tasks: this.todo, color: '#9fc5e8' },
    { name: 'IN PROGRESS', tasks: this.inProgress, color: '#ffe599' },
    { name: 'DONE', tasks: this.done, color: '#b6d7a8' },
    { name: 'CANCELLED', tasks: this.cancelled, color: '#ea9999' }
  ];

  onDrop(event: CdkDragDrop<{ id: string; title: string; description: string }[]>) {
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
