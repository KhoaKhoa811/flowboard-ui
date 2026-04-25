import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-default-avatar',
  imports: [CommonModule],
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
      this.avatarColor = this.getAvatarColor(this.name);
    }
  }

  private getInitials(name: string): string {
    const parts = name.trim().split(' ');
    if (parts.length > 1) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return parts[0][0].toUpperCase();
  }

  private getAvatarColor(name: string): string {
    const colors = [
      '#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#34495e',
      '#16a085', '#27ae60', '#2980b9', '#8e44ad', '#2c3e50',
      '#f39c12', '#d35400', '#c0392b', '#7f8c8d', '#bdc3c7',
    ];
    const hash = this.hashString(name);
    return colors[hash % colors.length];
  }

  private hashString(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash);
  }
}
