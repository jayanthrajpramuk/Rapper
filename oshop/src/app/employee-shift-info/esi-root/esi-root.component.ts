import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {Breadcrumb, BreadcrumbService} from "angular-crumbs";

@Component({
  selector: 'app-esi-root',
  templateUrl: './esi-root.component.html',
  styleUrls: ['./esi-root.component.css']
})
export class EsiRootComponent implements OnInit {

  MODULE_ROOT = '/esi';

  moduleLinks = [
    {'name': 'Root', 'path': '/'},
    {'name':'Home', 'path':this.MODULE_ROOT+'/home'},
    {'name':'Details', 'path':this.MODULE_ROOT+'/details'},
    {'name':'Reports', 'path':this.MODULE_ROOT+'/reports'}
  ];



  constructor( private titleService: Title,private breadcrumbService: BreadcrumbService) {
  }

  ngOnInit() {
    this.breadcrumbService.breadcrumbChanged.subscribe((crumbs) => {
      this.titleService.setTitle(this.createTitle(crumbs));
    });
  }

  private createTitle(routesCollection: Breadcrumb[]) {
    const title = 'Angular Breadcrumb';
    const titles = routesCollection.filter((route) => route.displayName);

    if (!titles.length) { return title; }

    const routeTitle = this.titlesToString(titles);
    return `${routeTitle} ${title}`;
  }

  private titlesToString(titles) {
    return titles.reduce((prev, curr) => {
      return `${curr.displayName} - ${prev}`;
    }, '');
  }

}
