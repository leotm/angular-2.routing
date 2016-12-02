import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { UserComponent } from './user/user.component';

const APP_ROUTES = [
  { path: '', component: HomeComponent },
  { path: 'user/:id', component: UserComponent },
];

export const routing = RouterModule.forRoot(APP_ROUTES);
