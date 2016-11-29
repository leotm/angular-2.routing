import { Component } from '@angular/core';

@Component({
  moduleId: 'module.id',
  selector: 'app-user-component',
  template: `
      <h1>User Component</h1>
      <a [routerLink]="['/user']">User</a>
    `
})
export class UserComponent {
}
