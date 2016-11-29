import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { HomeComponent } from './home-component.component';

const APP_ROUTES = [
  { path: 'user/:id', component: UserComponent },
  { path: '', component: HomeComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
