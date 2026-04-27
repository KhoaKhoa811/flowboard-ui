import { Component } from '@angular/core';
import { StatGroup } from './stat-group/stat-group';

@Component({
  selector: 'app-team-page',
  imports: [StatGroup],
  templateUrl: './team-page.html',
  styleUrl: './team-page.scss',
})
export class TeamPage {}
