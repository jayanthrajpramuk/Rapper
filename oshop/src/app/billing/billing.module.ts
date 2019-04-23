import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {BillingRoutingModule} from './billing-routing.module';
import {BillingHomeComponent} from './billing-home/billing-home.component';
import {CoreModule} from "../core/core.module";
import {RegisterPatientComponent} from './register-patient/register-patient.component';
import {DiagnosePatientComponent} from './diagnose-patient/diagnose-patient.component';
import {BillPatientComponent} from './bill-patient/bill-patient.component';
import {ReportPatientComponent} from './report-patient/report-patient.component';
import {Action, StoreModule} from "@ngrx/store";
import {billreducer} from "./store/bill-reducer";
import {Actions, EffectsModule} from "@ngrx/effects";
import {BillEffects} from "./store/bill-effects";
import {HttpClient} from "@angular/common/http";
import {BillService} from "./services/bill-service";
import {RegistrationService} from "./services/registration-service";
import {BillingAdminHomeComponent} from "./billing-admin/billing-admin-home/billing-admin-home.component";
import {BillingAdminRootComponent} from "./billing-admin/billing-admin-root/billing-admin-root.component";


@NgModule({
  declarations: [
    BillingHomeComponent,
    RegisterPatientComponent,
    DiagnosePatientComponent,
    BillPatientComponent,
    ReportPatientComponent,
    BillingAdminRootComponent
  ],

  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([BillEffects]),
    StoreModule.forFeature('billing', billreducer),
    BillingRoutingModule
  ],
  providers : [
    HttpClient,
    Actions,
    BillService,
    RegistrationService
  ]
})
export class BillingModule {
}
