import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { TeamCard } from './team-card/team-card';

@Component({
  selector: 'app-team-list',
  imports: [MatIcon, TeamCard],
  templateUrl: './team-list.html',
  styleUrl: './team-list.scss',
})
export class TeamList {}
