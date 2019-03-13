import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EsiHomeComponent} from "./esi-home/esi-home.component";
import {EsiDetailsComponent} from "./esi-details/esi-details.component";
import {EsiReportComponent} from "./esi-report/esi-report.component";

const routes: Routes = [
  {
    path: 'home', component: EsiHomeComponent, data: {
      breadcrumb: 'Home'
    }
  },
  {
    path: 'details', component: EsiDetailsComponent, data: {
      breadcrumb: 'Shift Details'
    }
  },
  {
    path: 'reports', component: EsiReportComponent, data: {
      breadcrumb: 'Reports'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeShiftInfoRoutingModule {
}
