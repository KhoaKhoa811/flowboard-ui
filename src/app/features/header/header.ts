import { HeaderLayoutService } from './../../core/services/header-layout-service';
import { Component, inject } from '@angular/core';
import { DefaultAvatar } from '../../shared/components/default-avatar/default-avatar';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [DefaultAvatar, CommonModule, MatIcon, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  public headerService = inject(HeaderLayoutService);
}
