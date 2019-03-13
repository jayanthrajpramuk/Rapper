import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TaHomeComponent} from "./ta-home/ta-home.component";
import {TaJobProfileComponent} from "./ta-job-profile/ta-job-profile.component";
import {TaScheduleInterviewComponent} from "./ta-schedule-interview/ta-schedule-interview.component";
import {TaReportsComponent} from "./ta-reports/ta-reports.component";

const routes: Routes = [
  {
    path: 'home', component: TaHomeComponent, data: {
      breadcrumb: 'Home'
    }
  },
  {
    path: 'jp', component: TaJobProfileComponent, data: {
      breadcrumb: 'Job Profile'
    }
  },
  {
    path: 'schedule', component: TaScheduleInterviewComponent, data: {
      breadcrumb: 'Schedule Interview'
    }
  },
  {
    path: 'reports', component: TaReportsComponent, data: {
      breadcrumb: 'Reports'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TalentAcquisitionRoutingModule {
}
