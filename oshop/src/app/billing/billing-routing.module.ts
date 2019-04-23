import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BillingHomeComponent} from "./billing-home/billing-home.component";
import {RegisterPatientComponent} from "./register-patient/register-patient.component";
import {DiagnosePatientComponent} from "./diagnose-patient/diagnose-patient.component";
import {BillPatientComponent} from "./bill-patient/bill-patient.component";
import {ReportPatientComponent} from "./report-patient/report-patient.component";
import {BillingAdminHomeComponent} from "./billing-admin/billing-admin-home/billing-admin-home.component";
import {BillingAdminRootComponent} from "./billing-admin/billing-admin-root/billing-admin-root.component";

const routes: Routes = [
  {
    path: 'home', component: BillingHomeComponent, data: {
      breadcrumb: 'home'
    }
  },
  {
    path: 'register', component: RegisterPatientComponent, data: {
      breadcrumb: 'register'
    }
  },
  {
    path: 'diagnosis', component: DiagnosePatientComponent, data: {
      breadcrumb: 'diagnose'
    }
  },
  {
    path: 'bill', component: BillPatientComponent, data: {
      breadcrumb: 'bill'
    }
  },
  {
    path: 'reports', component: ReportPatientComponent, data: {
      breadcrumb: 'reports'
    }
  },
  {
    path: 'admin',
    data: {
      breadcrumb: 'admin'
    },
 //   component: BillingAdminRootComponent,
    children: [
      {path: '', loadChildren: '../../app/billing/billing-admin/billing-admin.module#BillingAdminModule'}
    ]

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingRoutingModule {
}
