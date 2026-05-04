import { Component, Input } from '@angular/core';
import { DefaultAvatar } from '../../../../shared/components/default-avatar/default-avatar';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-team-member-item',
  imports: [DefaultAvatar, MatIcon],
  templateUrl: './team-member-item.html',
  styleUrl: './team-member-item.scss',
})
export class TeamMemberItem {
  @Input() memberName!: string;
  @Input() memberMail!: string;
}
