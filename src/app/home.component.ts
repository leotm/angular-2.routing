import { Component } from '@angular/core';

@Component({
  moduleId: 'module.id',
  selector: 'app-home-component',
  template: `
    <h1>
      Home Component!
    </h1>
    <hr>
  `,
  styles: []
})
export class HomeComponent {
  constructor() {
  }

  ngOnDestroy() {
  }
}
