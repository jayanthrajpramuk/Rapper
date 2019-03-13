import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TalentAcquisitionRoutingModule } from './talent-acquisition-routing.module';
import {CoreModule} from "../core/core.module";
import { TaJobProfileComponent } from './ta-job-profile/ta-job-profile.component';
import { TaRootComponent } from './ta-root/ta-root.component';
import { TaHomeComponent } from './ta-home/ta-home.component';
import { TaScheduleInterviewComponent } from './ta-schedule-interview/ta-schedule-interview.component';
import { TaFeedbackComponent } from './ta-feedback/ta-feedback.component';
import { TaDriveComponent } from './ta-drive/ta-drive.component';
import { TaReportsComponent } from './ta-reports/ta-reports.component';

@NgModule({
  declarations: [
    TaJobProfileComponent,
    TaHomeComponent,
    TaScheduleInterviewComponent,
    TaFeedbackComponent,
    TaDriveComponent,
    TaReportsComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    TalentAcquisitionRoutingModule
  ]
})
export class TalentAcquisitionModule { }
