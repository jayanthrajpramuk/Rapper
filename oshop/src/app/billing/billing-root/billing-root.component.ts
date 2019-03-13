import {Component, OnInit} from '@angular/core';
import { Breadcrumb, BreadcrumbService } from 'angular-crumbs';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-billing-root',
  templateUrl: './billing-root.component.html',
  styleUrls: ['./billing-root.component.css']
})
export class BillingRootComponent implements OnInit {

  MODULE_ROOT = '/billing';

  moduleLinks = [
    {'name': 'Root', 'path': '/'},
    {'name': 'Home', 'path': this.MODULE_ROOT + '/home'},
    {'name': 'Register', 'path': this.MODULE_ROOT + '/register'},
    {'name': 'Diagnosis', 'path': this.MODULE_ROOT + '/diagnosis'},
    {'name': 'Bill', 'path': this.MODULE_ROOT + '/bill'},
    {'name': 'Reports', 'path': this.MODULE_ROOT + '/reports'}
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
