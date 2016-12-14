import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {TestService} from "./services/test.service";
import {HttpModule} from "@angular/http";
import {PersonDetailComponent} from "./component/person-detail.component";
import {BootstrapTestComponent} from "./component/bootstrap-test.component";
import {PersonListComponent} from "./component/person-list.component";
import {Bootstrap4TestComponent} from "./component/bootstrap4-test.component";


@NgModule({
  imports:      [
    BrowserModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    PersonDetailComponent,
    PersonListComponent,
    BootstrapTestComponent,
    Bootstrap4TestComponent,
  ],
  providers: [
    TestService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
