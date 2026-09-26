import { Routes } from '@angular/router';
import { Events } from './events/events';
import { PageNotFound } from './page-not-found/page-not-found';
import { PipeRev } from './pipe-rev/pipe-rev';
import { ServiceDataUser } from './service-data-user/service-data-user';
import { SignalsRevision } from './signals-revision/signals-revision';

export const routes: Routes = [
    // {
    //     path: '',
    //     component: App
    // },
    {
        path: "events",
        component: Events
    },
    {
        path: 'signals/:id',
        component: SignalsRevision
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
