import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { TaskListItem } from './task-list-item/task-list-item';

@Component({
  selector: 'app-team-tasks',
  imports: [MatIcon, CommonModule, TaskListItem],
  templateUrl: './team-tasks.html',
  styleUrl: './team-tasks.scss',
})
export class TeamTasks {
  filteredName = signal<string>('all');

  onChangeFilter(filterName: string) {
    this.filteredName.set(filterName);
  }
}
