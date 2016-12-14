import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {TestService} from "./services/test.service";
import {HttpModule} from "@angular/http";
import {PersonDetailComponent} from "./component/person-detail.component";
import {BootstrapTestComponent} from "./component/bootstrap-test.component";


@NgModule({
  imports:      [
    BrowserModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    PersonDetailComponent,
    BootstrapTestComponent,
  ],
  providers: [
    TestService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
