import { Component } from '@angular/core';
import { StatItem } from './stat-item/stat-item';

@Component({
  selector: 'app-stat-group',
  imports: [StatItem],
  templateUrl: './stat-group.html',
  styleUrl: './stat-group.scss',
})
export class StatGroup {}
