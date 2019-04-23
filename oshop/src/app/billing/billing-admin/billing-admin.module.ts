import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { AgGridModule } from 'ag-grid-angular';

import {BillingAdminHomeComponent} from './billing-admin-home/billing-admin-home.component';
import {EditPatientComponent} from './edit-patient/edit-patient.component';
import {EditDiagnosisRateComponent} from './edit-diagnosis-rate/edit-diagnosis-rate.component';
import {EditUsersComponent} from './edit-users/edit-users.component';
import {AgGridLinkRenderer} from "../../../app/core/ag-grid-renderers/ag-grid-link-renderer";


const routes: Routes = [
  {
    path: '', component: BillingAdminHomeComponent, data: {
      breadcrumb: 'Home'
    }
  },
  {
    path: 'patients', component: EditPatientComponent, data: {
      breadcrumb: 'edit patient'
    }
  },
  {
    path: 'diagnosis-rate', component: EditDiagnosisRateComponent, data: {
      breadcrumb: 'edit diagnosis rate'
    }
  }
];

@NgModule({
  declarations: [BillingAdminHomeComponent, EditPatientComponent,
    EditDiagnosisRateComponent, EditUsersComponent, AgGridLinkRenderer],
  imports: [
    CommonModule,
    AgGridModule.withComponents([AgGridLinkRenderer]),
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BillingAdminModule {
}

