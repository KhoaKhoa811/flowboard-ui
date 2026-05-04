import { Component } from '@angular/core';
import { NameColorPipe } from '../../../shared/pipes/name-color-pipe';
import { MatIcon } from '@angular/material/icon';
import { ItemBoard } from './item-board/item-board';
import { TeamMemberItem } from './team-member-item/team-member-item';

@Component({
  selector: 'app-team-overview',
  imports: [NameColorPipe, MatIcon, ItemBoard, TeamMemberItem],
  templateUrl: './team-overview.html',
  styleUrl: './team-overview.scss',
})
export class TeamOverview {}
