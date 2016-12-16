import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {HttpModule} from "@angular/http";
import {PersonDetailComponent} from "./component/person/person-details.component";
import {BootstrapTestComponent} from "./component/test/bootstrap-test.component";
import {PersonListComponent} from "./component/person/person-list.component";
import {Bootstrap4TestComponent} from "./component/test/bootstrap4-test.component";
import {NavBarComponent} from "./shared/topnav/nav-bar.component";
import {SidebarComponent} from "./shared/sidebar/side-bar.component";
import {PersonService} from "./services/person.service";
import {Routes, RouterModule} from "@angular/router";
import {FooterComponent} from "./shared/footer/footer.component";
import {HomePageComponent} from "./component/homepage/home-page.component";

const appRoutes: Routes = [
  { path: 'person-list', component: PersonListComponent },
  { path: 'person-details', component: PersonDetailComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: 'bootstrap4-test', component: Bootstrap4TestComponent },
  { path: '', component: HomePageComponent },
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
    HomePageComponent,
    BootstrapTestComponent,
    Bootstrap4TestComponent,
    NavBarComponent,
    SidebarComponent,
    FooterComponent,
  ],
  providers: [
    PersonService,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
