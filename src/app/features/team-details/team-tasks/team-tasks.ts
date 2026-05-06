import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { TaskListItem } from './task-list-item/task-list-item';
import { SharedDialog } from '../../../shared/components/shared-dialog/shared-dialog';
import { CreateTaskForm } from './create-task-form/create-task-form';

@Component({
  selector: 'app-team-tasks',
  imports: [MatIcon, CommonModule, TaskListItem, SharedDialog, CreateTaskForm],
  templateUrl: './team-tasks.html',
  styleUrl: './team-tasks.scss',
})
export class TeamTasks {
  filteredName = signal<string>('all');

  toggleDialog: boolean = false;

  onChangeFilter(filterName: string) {
    this.filteredName.set(filterName);
  }

  onToggleDialog() {
    this.toggleDialog = !this.toggleDialog;
  }
}
