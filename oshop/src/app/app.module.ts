import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {environment} from 'src/environments/environment';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import {CustomFormsModule} from 'ng2-validation'
import {RouterModule} from '@angular/router';
import {BsNavComponent} from './bs-nav/bs-nav.component';
import {CoreModule} from "./core/core.module";
import {BreadcrumbModule} from 'angular-crumbs';
import {BillingRootComponent} from "./billing/billing-root/billing-root.component";
import {TaRootComponent} from "./talent-acquisition/ta-root/ta-root.component";
import {EsiRootComponent} from "./employee-shift-info/esi-root/esi-root.component";
import {HomeComponent} from "./multi-project-home/home.component";
import {InvalidUrlComponent} from "./core/invalid-url/invalid-url.component";
import {StoreModule} from "@ngrx/store";
import {rootreducer} from "./root-store/root-reducer";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";


@NgModule({
  declarations: [
    AppComponent,
    BsNavComponent,
    HomeComponent,
    InvalidUrlComponent,
    BillingRootComponent,
    TaRootComponent,
    EsiRootComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    CoreModule,
    BreadcrumbModule,
    StoreModule.forRoot({initLoad: rootreducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
//    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([

      // Billing Application Routes

      {
        path: 'billing',
        component: BillingRootComponent,
        children: [
          {path: '', loadChildren: '../app/billing/billing.module#BillingModule'}
        ]
      },

      // Talent Acquisition
      {
        path: 'ta',
        component:TaRootComponent,
        children: [
          {path: '', loadChildren: '../app/talent-acquisition/talent-acquisition.module#TalentAcquisitionModule'}
        ]
      },

      // employee Shift Info
      {
        path: 'esi',
        component:EsiRootComponent,
        children: [
          {path: '', loadChildren: '../app/employee-shift-info/employee-shift-info.module#EmployeeShiftInfoModule'}
        ]
      },

      {path: '', component: HomeComponent},
      {path: '**', component: InvalidUrlComponent},

    ])
  ],
  providers: [
     ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {
}
