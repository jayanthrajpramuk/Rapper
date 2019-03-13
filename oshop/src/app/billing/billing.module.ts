import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


import {BillingRoutingModule} from './billing-routing.module';
import {BillingHomeComponent} from './billing-home/billing-home.component';
import {CoreModule} from "../core/core.module";
import {RegisterPatientComponent} from './register-patient/register-patient.component';
import {DiagnosePatientComponent} from './diagnose-patient/diagnose-patient.component';
import {BillPatientComponent} from './bill-patient/bill-patient.component';
import {ReportPatientComponent} from './report-patient/report-patient.component';


@NgModule({
  declarations: [
    BillingHomeComponent,
    RegisterPatientComponent,
    DiagnosePatientComponent,
    BillPatientComponent,
    ReportPatientComponent
  ],

  imports: [
    CommonModule,
    CoreModule,

    BillingRoutingModule
  ]
})
export class BillingModule {
}
