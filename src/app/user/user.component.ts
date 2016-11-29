import { Component } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  moduleId: 'module.id',
  selector: 'app-user-component',
  template: `
      <h1>User Component</h1>
      <button (click)="onNavigate()">Go Home</button>
      <hr>
      {{id}}
    `
})
export class UserComponent {
  id: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.id = activatedRoute.snapshot.params['id'];
  }
  onNavigate() {
    this.router.navigate(['/']);
  }
}
