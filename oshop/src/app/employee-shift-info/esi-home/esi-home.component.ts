import { Component, OnInit } from '@angular/core';
import {ESState} from "../store/employee-shift-reducer";
import {Store} from "@ngrx/store";
import {EmployeeShiftUser} from "../store/employee-shift-actions";

@Component({
  selector: 'app-esi-home',
  templateUrl: './esi-home.component.html',
  styleUrls: ['./esi-home.component.css']
})
export class EsiHomeComponent implements OnInit {

  constructor(private store : Store<ESState>) { }

  ngOnInit() {
  }

  onClick() {
      this.store.dispatch(new EmployeeShiftUser({
        name: 'smita',
        shiftType: 'GS',
        location: 'Bangalore',
        age: 25,
        gender: 'F'
      }))
  }

}
