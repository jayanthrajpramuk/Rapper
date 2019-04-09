import {Actions, Effect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {of, iif} from 'rxjs';
import {map, mergeMap, switchMap, tap} from 'rxjs/operators';
import {BillActionTypes, BillLanguage, LoadBillsSuccess} from "./bill-actions";
import {HttpClient} from "@angular/common/http";
import {concatMap} from "rxjs-compat/operator/concatMap";
import {concatMapTo} from "rxjs-compat/operator/concatMapTo";
import {BillService} from "../services/bill-service";

@Injectable()
export class BillEffects {

  constructor(private actions$: Actions,
              private billService: BillService) {
  }

  @Effect()
  langage$ = this.actions$.pipe(
    ofType(BillActionTypes.ChangeLanguage),
    switchMap(() => {
      return of(this.billService.ChangeLanguage())
        .pipe(
          map((response) => {
            return new BillLanguage(response);
          })
        )
    })
  );
/*
  @Effect()
  loadBills$ = this.actions$.pipe(
    ofType(BillActionTypes.LoadBills),
    switchMap(() => {
      return of(this.billService.loadBill())
        .pipe(
          map((response) => {
            return new LoadBillsSuccess(response);
          })
        )
    })
  );*/

  @Effect()
  loadBills$ = this.actions$.pipe(
    ofType(BillActionTypes.LoadBills),
    mergeMap(() => {
      return this.billService.loadBill()
        .pipe(
          map((response : {billNo:Number,paientName:String}) => {
            return new LoadBillsSuccess(response);
          })
        )
    })
  );


}

