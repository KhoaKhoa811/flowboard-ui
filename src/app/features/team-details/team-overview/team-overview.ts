import { Component } from '@angular/core';
import { NameColorPipe } from '../../../shared/pipes/name-color-pipe';
import { MatIcon } from '@angular/material/icon';
import { ItemBoard } from './item-board/item-board';

@Component({
  selector: 'app-team-overview',
  imports: [NameColorPipe, MatIcon, ItemBoard],
  templateUrl: './team-overview.html',
  styleUrl: './team-overview.scss',
})
export class TeamOverview {}
