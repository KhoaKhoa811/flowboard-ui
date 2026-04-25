import { Component } from '@angular/core';
import { DefaultAvatar } from '../../shared/components/default-avatar/default-avatar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [DefaultAvatar, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}
