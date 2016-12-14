import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {TestService} from "./services/test.service";
import {HttpModule} from "@angular/http";


@NgModule({
  imports:      [
    BrowserModule,
    HttpModule
  ],
  declarations: [
    AppComponent,

  ],
  providers: [
    TestService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
