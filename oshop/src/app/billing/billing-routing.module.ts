import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BillingHomeComponent} from "./billing-home/billing-home.component";
import {RegisterPatientComponent} from "./register-patient/register-patient.component";
import {DiagnosePatientComponent} from "./diagnose-patient/diagnose-patient.component";
import {BillPatientComponent} from "./bill-patient/bill-patient.component";
import {ReportPatientComponent} from "./report-patient/report-patient.component";

const routes: Routes = [
  {
    path: 'home', component: BillingHomeComponent, data: {
      breadcrumb: 'Home'
    }
  },
  {
    path: 'register', component: RegisterPatientComponent, data: {
      breadcrumb: 'Register'
    }
  },
  {
    path: 'diagnosis', component: DiagnosePatientComponent, data: {
      breadcrumb: 'Diagnose'
    }
  },
  {
    path: 'bill', component: BillPatientComponent, data: {
      breadcrumb: 'bill'
    }
  },
  {
    path: 'reports', component: ReportPatientComponent, data: {
      breadcrumb: 'Reports'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingRoutingModule {
}
