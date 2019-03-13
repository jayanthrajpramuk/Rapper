import { Component, OnInit , Input} from '@angular/core';
import {Router} from '@angular/router';

import { _ } from 'underscore';



@Component({
    selector: 'bs-nav',
    templateUrl: './bs-nav.component.html',
    styleUrls: ['./bs-nav.component.css']
})
export class BsNavComponent implements OnInit {

    @Input()
    private login;

    @Input()
    private displayName;

    public cartObject;

    public shoppingCardCount:number = 0;

    constructor(private router:Router,
               ) {

    }


    async ngOnInit() {}

    isAdmin() {
        return JSON.parse(localStorage.getItem('user'))['isAdmin'];
    }

    logout() {}

}
