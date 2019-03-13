import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {
    path: ActivatedRouteSnapshot[];
    readonly;
    route: ActivatedRouteSnapshot;

  constructor(private router:Router) { }

    canActivate(route, state:RouterStateSnapshot) {

     return true;

    }
}
