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
  // persons2: Person[];
  errorMessage : string;

  constructor(private _service: PersonService){}

  ngOnInit(){
    this.getPersons();
    // this.getPersons2();
  }

  getPersons() {
    this._service.findAll()
      .then(
        value => this.persons = value,
        error =>  this.errorMessage = <any>error
      );
  }

  // getPersons2() {
  //   this._service.getPersons()
  //     .subscribe(
  //       r => this.persons = r,
  //       error =>  this.errorMessage = <any>error);
  // }


}
