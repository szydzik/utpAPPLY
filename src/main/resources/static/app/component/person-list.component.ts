import {Component} from "@angular/core";
import {Person} from "../model/Person";

@Component({
  moduleId: module.id,
  selector: 'person-list',
  templateUrl: 'person-list.component.html'
})
export class PersonListComponent{
  persons: Person[];


}
