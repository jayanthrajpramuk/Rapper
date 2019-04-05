import {Component, OnInit} from '@angular/core';
import {RootState} from "../root-store/root-reducer";
import {Store} from "@ngrx/store";
import {RootAccessedApplication} from "../root-store/root-actions";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private store : Store<RootState>) {}


  ngOnInit() {
    this.store.dispatch(new RootAccessedApplication({
      username: 'A028515-j',
      age : 30,
      gender: 'M'
    }));
  }

}
