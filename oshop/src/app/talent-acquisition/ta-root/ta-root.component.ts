import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {Breadcrumb, BreadcrumbService} from "angular-crumbs";

@Component({
  selector: 'app-ta-root',
  templateUrl: './ta-root.component.html',
  styleUrls: ['./ta-root.component.css']
})
export class TaRootComponent implements OnInit {

  MODULE_ROOT = '/ta';

  moduleLinks = [
    {'name': 'Root', 'path': '/'},
    {'name':'Home', 'path':this.MODULE_ROOT+'/home'},
    {'name':'Job Profile', 'path':this.MODULE_ROOT+'/jp'},
    {'name':'Schedule Interview', 'path':this.MODULE_ROOT+'/schedule'},
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
