import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'teams',
        pathMatch: 'full'
    },
    {
        path: 'teams',
        loadComponent: () => import('./features/team-page/team-page').then(m => m.TeamPage)
    },
    {
        path: 'team-details/:id',
        loadComponent: () => import('./features/team-details/team-details').then(m => m.TeamDetails),
        children: [
            {
                path: '',
                redirectTo: 'overview', 
                pathMatch: 'full'
            },
            {
                path: 'overview',
                loadComponent: () => import('./features/team-details/team-overview/team-overview').then(m => m.TeamOverview)
            },
            {
                path: 'tasks',
                loadComponent: () => import('./features/team-details/team-tasks/team-tasks').then(m => m.TeamTasks)
            }
        ]
    }
];
