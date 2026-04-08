import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-kanban-item',
  imports: [CommonModule],
  templateUrl: './kanban-item.html',
  styleUrl: './kanban-item.scss',
})
export class KanbanItem {
  @Input() task: any;
  @Input() color: string = '#ccc';
}
