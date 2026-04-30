import { Component } from '@angular/core';
import { StatGroup } from './stat-group/stat-group';
import { TeamList } from './team-list/team-list';
import { JoinTeam } from './join-team/join-team';

@Component({
  selector: 'app-team-page',
  imports: [StatGroup, TeamList, JoinTeam],
  templateUrl: './team-page.html',
  styleUrl: './team-page.scss',
})
export class TeamPage {}
