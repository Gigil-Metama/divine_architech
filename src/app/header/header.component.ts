import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Route, Router, Routes } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  currentPath: string = '/';
  showMenu: boolean = false;
  routes: Routes = [];

  constructor(private router: Router) {
    for (let route of this.router.config) {
      if (route.data) {
        const menu = route?.data['menu'];
        if (menu !== undefined && menu.include) {
          this.routes.push(route);
        }
      }
    }
    this.router.events.pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd)).subscribe(e =>{
       this.currentPath = e.urlAfterRedirects.substring(1);
       for (let route of this.routes) {
        if (this.currentPath === route.path) {
          //match 
          this.setCurrent(route, true);
        } else {
          this.setCurrent(route, false);
        }
       }
    });
  }

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }

  setCurrent(route: Route, state: boolean): void {
    if (route.data) {
      const menu = route?.data['menu'];
      if (menu !== undefined) {
        menu.current = state;
      }
    }
  }

  isCurrentRoute(route: Route): boolean {
    return route.data && route?.data['menu'] && route?.data['menu'].current;
  }
}
