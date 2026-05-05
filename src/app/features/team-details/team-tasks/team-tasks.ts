import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-team-tasks',
  imports: [MatIcon, CommonModule],
  templateUrl: './team-tasks.html',
  styleUrl: './team-tasks.scss',
})
export class TeamTasks {
  filteredName = signal<string>('all');

  onChangeFilter(filterName: string) {
    this.filteredName.set(filterName);
  }
}
