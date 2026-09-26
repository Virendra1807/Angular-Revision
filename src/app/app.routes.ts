import { Routes } from '@angular/router';
import { Events } from './events/events';
import { PageNotFound } from './page-not-found/page-not-found';
import { PipeRev } from './pipe-rev/pipe-rev';
import { ServiceDataUser } from './service-data-user/service-data-user';

export const routes: Routes = [
    // {
    //     path: '',
    //     component: App
    // },
    {
        path: "events",
        component: Events
    },
    // Lazy loading on Signals page as the Folder is loaded at the time it called. Check in inspect=. Sources
    {
        path: 'signals/:id',
        loadComponent: () => import('./signals-revision/signals-revision').then((c) => c.SignalsRevision)

    },
    {
        path: 'serviceUsed',
        component: ServiceDataUser
    },
    {
        path: 'pipeRev',
        component: PipeRev
    },
    {
        path: '**',
        component: PageNotFound
    }
    // {
    //     path: '**',
    //     redirectTo: ""
    // }
];
