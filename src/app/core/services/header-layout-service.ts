import { Injectable, signal } from '@angular/core';

export type HeaderMode = 'default' | 'team';

@Injectable({
  providedIn: 'root',
})
export class HeaderLayoutService {

  headerMode = signal<HeaderMode>('default');

  currentTeam = signal<{id: string, name: string} | null>(null);

  setTeamHeader(id: string, name: string) {
    this.currentTeam.set({ id, name });
    this.headerMode.set('team');
  }

  setDefaultHeader() {
    this.headerMode.set('default');
    this.currentTeam.set(null);
  }
}
