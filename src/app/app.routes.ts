import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { UserComponent } from './user/user.component';
import { ParamComponent } from './param.component';

const APP_ROUTES = [
  { path: '', component: HomeComponent },
  { path: 'user/:id', component: UserComponent },
  { path: 'param', component: ParamComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
