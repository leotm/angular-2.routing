import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { UserComponent } from './user/user.component';
import { ParamComponent } from './param.component';
import { USER_ROUTES } from './user/user.routes';

const APP_ROUTES = [
  { path: '', component: HomeComponent },
  { path: 'user/:id', component: UserComponent},
  { path: 'user/:id', component: UserComponent, children: USER_ROUTES },
  { path: 'param', component: ParamComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
