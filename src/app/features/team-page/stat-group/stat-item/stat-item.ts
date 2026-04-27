import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-stat-item',
  imports: [MatIconModule],
  templateUrl: './stat-item.html',
  styleUrl: './stat-item.scss',
})
export class StatItem {
  @Input() icon: string = 'groups';
  @Input() iconBackgroundColor: string = 'rgb(238, 242, 255)';
  @Input() iconColor: string = 'rgb(99, 102, 241)';
  
  @Input() itemCount: number = 8;
  @Input() itemType: string = 'Teams';
}
