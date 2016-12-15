import { Component } from '@angular/core';
import {Person} from "./model/Person";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent  {

  persons : Person;

  ngOnInit() {

  }


  name = 'Angular';

}
