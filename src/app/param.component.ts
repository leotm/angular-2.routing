import { Component, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  moduleId: 'module.id',
  selector: 'app-query-param-component',
  template: `
    <h1>
      Param Component!
    </h1>
    <hr>
    {{param}}
    <hr>
  `,
  styles: [],
  providers: [RouterLink]
})
export class ParamComponent implements OnDestroy {
  private subscription: Subscription;
  param: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private routerLink: RouterLink) {
    this.subscription = activatedRoute.queryParams.subscribe(
      (queryParam: any) => this.param = queryParam['analytics']
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe;
  }
}
