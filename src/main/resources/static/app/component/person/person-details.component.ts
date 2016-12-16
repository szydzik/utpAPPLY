import {Component} from "@angular/core";
import {Person} from "../../model/Person";

@Component({
  moduleId: module.id,
  selector: 'person-details',
  templateUrl: 'person-details.component.html'
})
export class PersonDetailComponent  {

  person : Person;
  ngOnInit() {
  }

}
