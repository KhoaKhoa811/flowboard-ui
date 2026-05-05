import { Component } from '@angular/core';
import { DefaultAvatar } from '../../../../shared/components/default-avatar/default-avatar';

@Component({
  selector: '[app-task-list-item]',
  imports: [DefaultAvatar],
  templateUrl: './task-list-item.html',
  styleUrl: './task-list-item.scss',
})
export class TaskListItem {}
