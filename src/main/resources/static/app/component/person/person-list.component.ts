import {Component} from "@angular/core";
import {Person} from "../../model/Person";
import {PersonService} from "../../services/person.service";

@Component({
  moduleId: module.id,
  selector: 'person-list',
  templateUrl: 'person-list.component.html',
  providers: [PersonService],
})
export class PersonListComponent{

  persons: Person;
  errorMessage : string;

  constructor(private _service: PersonService){}

  ngOnInit(){
    this.getPersons();
    // this._service.getPersons().then(res => this.persons = res);
  }

  getPersons() {
    this._service.getAll()
      .then(
        value => this.persons = value,
        error =>  this.errorMessage = <any>error
      );
  }

}
