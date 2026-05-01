import { Component, ViewChild } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { TeamCard } from './team-card/team-card';
import { CreateTeamForm } from './create-team-form/create-team-form';
import { SharedDialog } from '../../../shared/components/shared-dialog/shared-dialog';

@Component({
  selector: 'app-team-list',
  imports: [MatIcon, TeamCard, CreateTeamForm, SharedDialog],
  templateUrl: './team-list.html',
  styleUrl: './team-list.scss',
})
export class TeamList {
  openFormToggle: boolean = false;

  toggleCreateForm() {
    this.openFormToggle = !this.openFormToggle;
  }
}
