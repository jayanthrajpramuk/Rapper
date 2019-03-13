import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonNavigationComponent } from "./common-navigation/common-navigation.component";
import { RouterModule } from "@angular/router";


@NgModule({
  declarations: [
    CommonNavigationComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    CommonNavigationComponent
  ]
})
export class CoreModule { }
