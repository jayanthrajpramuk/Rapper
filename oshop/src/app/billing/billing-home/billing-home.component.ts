import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {BillState} from "../store/bill-reducer";
import {BillActionTypes, BillLanguage, ChangeBillLanguage, LoadAllBills} from "../store/bill-actions";

@Component({
  selector: 'billing-home',
  templateUrl: './billing-home.component.html',
  styleUrls: ['./billing-home.component.css']
})
export class BillingHomeComponent implements OnInit {


  constructor(private store : Store<BillState>) { }

  onClick() {
      this.store.dispatch(new ChangeBillLanguage("kgfiedfieu"));
  }

  onLoad() {
    this.store.dispatch(new LoadAllBills());
  }

  ngOnInit() {
  }

}
