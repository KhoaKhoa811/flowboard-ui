import { HeaderLayoutService } from './../../core/services/header-layout-service';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-team-details',
  imports: [RouterOutlet],
  templateUrl: './team-details.html',
  styleUrl: './team-details.scss',
})
export class TeamDetails implements OnInit, OnDestroy {
  private activateRoute = inject(ActivatedRoute);
  private headerService = inject(HeaderLayoutService);

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      const id = params['id'];

      if (id) {
        this.headerService.setTeamHeader(id, 'Product Team');
      }
    });
  }

  ngOnDestroy(): void {
    this.headerService.setDefaultHeader();
  }
}
