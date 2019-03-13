import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';




@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    private loginForm:FormGroup;
    user$:Observable<any>;

    constructor(private router:Router) {}


    ngOnInit() {
    }

    login() {}

    createLoginForm() {}


}
