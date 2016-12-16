import {Component} from "@angular/core";
import {Person} from "../../model/Person";
import {PersonService} from "../../services/person.service";

@Component({
  moduleId: module.id,
  selector: 'person-list',
  templateUrl: 'person-list.component.html'
})
export class PersonListComponent{

  persons: Person;

  constructor(private _service: PersonService){}

  ngOnInit(){
    this._service.getPersons().then(res => this.persons = res);
  }

}
