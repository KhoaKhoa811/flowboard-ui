import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { SharedDialog } from '../../../shared/components/shared-dialog/shared-dialog';
import { CreateTaskForm } from '../team-tasks/create-task-form/create-task-form';

@Component({
  selector: 'app-kanban-board',
  imports: [MatIcon, DragDropModule, CommonModule, SharedDialog, CreateTaskForm],
  templateUrl: './kanban-board.html',
  styleUrl: './kanban-board.scss',
})
export class KanbanBoard {
  backlog: string[] = [];
  todo: string[] = [];
  inProgress: string[] = [];
  done: string[] = [];
  cancelled: string[] = [];

  toggleDialog: boolean = false;

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  openCreateTaskDialog() {
    this.toggleDialog = true;
  }
}
