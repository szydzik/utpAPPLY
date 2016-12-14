import {Component} from "@angular/core";
import {Person} from "../model/Person";


@Component({
  moduleId: module.id,
  selector: 'person-detail',
  templateUrl: 'person-detail.component.html'
})
export class PersonDetailComponent  {

  person : Person;
  ngOnInit() {
  }

}
