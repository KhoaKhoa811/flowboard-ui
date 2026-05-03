import { Component } from '@angular/core';
import { NameColorPipe } from '../../../shared/pipes/name-color-pipe';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-team-overview',
  imports: [NameColorPipe, MatIcon],
  templateUrl: './team-overview.html',
  styleUrl: './team-overview.scss',
})
export class TeamOverview {}
