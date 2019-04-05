import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeShiftInfoRoutingModule } from './employee-shift-info-routing.module';
import {CoreModule} from "../core/core.module";
import { EsiHomeComponent } from './esi-home/esi-home.component';
import { EsiDetailsComponent } from './esi-details/esi-details.component';
import { EsiReportComponent } from './esi-report/esi-report.component';
import {StoreModule} from "@ngrx/store";
import {billreducer} from "../billing/store/bill-reducer";
import {employeeShiftReducer} from "./store/employee-shift-reducer";

@NgModule({
  declarations: [
    EsiHomeComponent,
    EsiDetailsComponent,
    EsiReportComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    EmployeeShiftInfoRoutingModule,
    StoreModule.forFeature('employeeShift', employeeShiftReducer),
  ]
})
export class EmployeeShiftInfoModule { }
