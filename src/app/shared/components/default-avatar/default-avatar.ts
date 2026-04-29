import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { NameColorPipe } from '../../pipes/name-color-pipe';

@Component({
  selector: 'app-default-avatar',
  imports: [CommonModule, NameColorPipe],
  templateUrl: './default-avatar.html',
  styleUrl: './default-avatar.scss',
})
export class DefaultAvatar {
  @Input() name: string = '';
  @Input() fontSize: number = 14;
  @Input() size: number = 24;

  initials: string = '';
  avatarColor: string = '';

  ngOnChanges() {
    if (this.name) {
      this.initials = this.getInitials(this.name);
    }
  }

  private getInitials(name: string): string {
    const parts = name.trim().split(' ');
    if (parts.length > 1) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return parts[0][0].toUpperCase();
  }
}
