import { Component, Input } from '@angular/core';
import { NameColorPipe } from '../../../../shared/pipes/name-color-pipe';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { DefaultAvatar } from '../../../../shared/components/default-avatar/default-avatar';

@Component({
  selector: 'app-team-card',
  imports: [NameColorPipe, CommonModule, MatIcon, DefaultAvatar],
  templateUrl: './team-card.html',
  styleUrl: './team-card.scss',
})
export class TeamCard {
  @Input() teamName: string = '';
  @Input() teamDescription: string = '';
}
