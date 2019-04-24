import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AgGridModule} from 'ag-grid-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {BillingAdminHomeComponent} from './billing-admin-home/billing-admin-home.component';
import {EditPatientComponent} from './billing-admin-patients/edit-patient.component';
import {EditDiagnosisRateComponent} from './billing-admin-diagnosis-rate/edit-diagnosis-rate.component';
import {EditUsersComponent} from './billing-admin-users/edit-users.component';
import {AgGridLinkRenderer} from "../../core/ag-grid-renderers/ag-grid-link-renderer/ag-grid-link-renderer";
import { BillingAdminRolesComponent } from './billing-admin-roles/billing-admin-roles.component';
import { BillingAdminDiagnosisCategoriesComponent } from './billing-admin-diagnosis-categories/billing-admin-diagnosis-categories.component';
import { BillingAdminRoleNewComponent } from './billing-admin-role-new/billing-admin-role-new.component';
import { BillingAdminRoleEditComponent } from './billing-admin-role-edit/billing-admin-role-edit.component';


const routes: Routes = [
  {
    path: 'home', component: BillingAdminHomeComponent, data: {
      breadcrumb: 'home'
    }
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'patients', component: EditPatientComponent, data: {
      breadcrumb: 'patients'
    }
  },
  {
    path: 'diagnosis-rate', component: EditDiagnosisRateComponent, data: {
      breadcrumb: 'diagnosis rate'
    }
  },
  {
    path: 'users', component: EditUsersComponent, data: {
      breadcrumb: 'users'
    }
  },
  {
    path: 'roles', component: BillingAdminRolesComponent, data: {
      breadcrumb: 'roles'
    }
  },
  {
    path: 'roles/new', component: BillingAdminRoleNewComponent, data: {
      breadcrumb: 'add new role'
    }
  },
  {
    path: 'roles/:id/edit', component: BillingAdminRoleEditComponent, data: {
      breadcrumb: 'edit role'
    }
  },
  {
    path: 'diagnosis-category', component: BillingAdminDiagnosisCategoriesComponent, data: {
      breadcrumb: 'diagnosis category'
    }
  }
];

@NgModule({
  declarations: [BillingAdminHomeComponent, EditPatientComponent,
    EditDiagnosisRateComponent, EditUsersComponent, AgGridLinkRenderer, BillingAdminRolesComponent, BillingAdminDiagnosisCategoriesComponent, BillingAdminRoleNewComponent, BillingAdminRoleEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([AgGridLinkRenderer]),
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BillingAdminModule {
}

