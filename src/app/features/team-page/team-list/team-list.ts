import { Component, inject, ViewChild } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { TeamCard } from './team-card/team-card';
import { CreateTeamForm } from './create-team-form/create-team-form';
import { SharedDialog } from '../../../shared/components/shared-dialog/shared-dialog';
import { HeaderLayoutService } from '../../../core/services/header-layout-service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-team-list',
  imports: [MatIcon, TeamCard, CreateTeamForm, SharedDialog, RouterModule],
  templateUrl: './team-list.html',
  styleUrl: './team-list.scss',
})
export class TeamList {
  public headerService = inject(HeaderLayoutService);

  openFormToggle: boolean = false;

  toggleCreateForm() {
    this.openFormToggle = !this.openFormToggle;
  }
}
