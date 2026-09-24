import { Routes } from '@angular/router';
import { Events } from './events/events';
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
        path: 'signals',
        component: SignalsRevision
    },
    {
        path: 'serviceUsed',
        component: ServiceDataUser
    }
];
