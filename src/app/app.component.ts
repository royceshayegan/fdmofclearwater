import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs/operators';
import { routerTransition } from './router.animations';

@Component({
  selector: 'app-root',
  animations: [ routerTransition ],
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {

  constructor(public router: Router, private activatedRoute: ActivatedRoute, private titleService: Title, private metaService: Meta) { }

  ngOnInit() {
    const events$ = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data)
    );
    
    events$.subscribe((event) => {
      this.titleService.setTitle(`FDM of Clearwater | ${event.title}`);
      this.metaService.updateTag({ name: 'description', content: `${event.metaDescription}` })
      // this.metaService.updateTag({ name: 'keywords', content: `${event.metaKeywords}` })
      console.log(event.title, event.metaDescription);
    });
      this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });
  }

  public getState(outlet) {
    return outlet.activatedRouteData.state;
  }

}
