import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./features/team-page/team-page').then(m => m.TeamPage)
    },
    {
        path: 'team',
        loadComponent: () => import('./features/team-page/team-page').then(m => m.TeamPage)
    }
];
