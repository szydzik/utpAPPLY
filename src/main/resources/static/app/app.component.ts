import { Component } from '@angular/core';
import {Person} from "./model/Person";
import {TestService} from "./services/test.service";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent  {

  persons : Person;

  constructor(private _service : TestService){}

  ngOnInit() {
    this._service.test().then(res => this.persons = res);
  }


  name = 'Angular';

}
