import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {HttpModule} from "@angular/http";
import {PersonDetailComponent} from "./component/person-detail.component";
import {BootstrapTestComponent} from "./component/bootstrap-test.component";
import {PersonListComponent} from "./component/person-list.component";
import {Bootstrap4TestComponent} from "./component/bootstrap4-test.component";
import {NavBarComponent} from "./component/nav-bar.component";
import {SidebarComponent} from "./shared/sidebar/side-bar.component";
import {PersonService} from "./services/person.service";
import {Routes, RouterModule} from "@angular/router";

const appRoutes: Routes = [
  { path: 'person-list', component: PersonListComponent },
  { path: 'person-detail', component: PersonDetailComponent },
  { path: 'bootstrap4-test', component: Bootstrap4TestComponent },
  // { path: '', component: AppComponent },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    PersonDetailComponent,
    PersonListComponent,
    BootstrapTestComponent,
    Bootstrap4TestComponent,
    NavBarComponent,
    SidebarComponent,
  ],
  providers: [
    PersonService,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
