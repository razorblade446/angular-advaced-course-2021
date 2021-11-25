import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map, Observable, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [],
})
export class BreadcrumbsComponent implements OnDestroy {
  public title!: string;
  public titleSubs$!: Subscription;

  constructor(private router: Router) {
    this.titleSubs$ = this.getRouteData().subscribe(
      ({ title }) => (this.title = title)
    );
  }

  ngOnDestroy(): void {
    this.titleSubs$.unsubscribe();
  }

  getRouteData(): Observable<any> {
    return this.router.events.pipe(
      filter<any>((event) => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      tap(console.log),
      map((event: ActivationEnd) => event.snapshot.data)
    );
  }
}
