import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {HttpModule, JsonpModule} from "@angular/http";
import {PersonDetailsComponent} from "./component/person/person-details.component";
import {PersonListComponent} from "./component/person/person-list.component";
import {NavBarComponent} from "./shared/topnav/nav-bar.component";
import {SidebarComponent} from "./shared/sidebar/side-bar.component";
import {PersonService} from "./services/person.service";
import {Routes, RouterModule} from "@angular/router";
import {FooterComponent} from "./shared/footer/footer.component";
import {HomePageComponent} from "./component/homepage/home-page.component";
import {FormsModule} from "@angular/forms";
import {Configuration} from "./app.constants";
import {CourseListComponent} from "./component/course/course-list.component";
import {CourseDetailsComponent} from "./component/course/course-details.component";
import {UniversityDetailsComponent} from "./component/university/university-details.component";
import {UniversityListComponent} from "./component/university/university-list.component";
import {DepartmentDetailsComponent} from "./component/department/department-details.component";
import {DepartmentListComponent} from "./component/department/department-list.component";
import {PostService} from "./auth/post.service";
import {LoginComponent} from "./auth/log-in/log-in.component";

const appRoutes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/login',
  // },
  { path: 'person-list', component: PersonListComponent },
  { path: 'person-details', component: PersonDetailsComponent },

  { path: 'course-list', component: CourseListComponent },
  { path: 'course-details', component: CourseDetailsComponent },

  { path: 'university-details', component: UniversityDetailsComponent },
  { path: 'university-list', component: UniversityListComponent },

  { path: 'department-details', component: DepartmentDetailsComponent },
  { path: 'department-list', component: DepartmentListComponent },

  { path: 'home-page', component: HomePageComponent },
  { path: '', component: HomePageComponent },
  { path: 'person-details/:id', component: PersonDetailsComponent },

  {
    path: 'login',
    component: LoginComponent
  },
  // {
  //   path: 'add',
  //   component: PersonDetailsComponent, canActivate: [AuthGuard]
  // }

  // { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, {
      useHash: true
    }),
    FormsModule,
    JsonpModule,
  ],
  declarations: [
    AppComponent,
    PersonDetailsComponent,
    PersonListComponent,
    HomePageComponent,
    NavBarComponent,
    SidebarComponent,
    FooterComponent,
    CourseDetailsComponent,
    CourseListComponent,
    UniversityDetailsComponent,
    UniversityListComponent,
    DepartmentDetailsComponent,
    DepartmentListComponent,
    LoginComponent,
  ],
  providers: [
    PersonService,
    Configuration,
    PostService,
    // LoginService,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
