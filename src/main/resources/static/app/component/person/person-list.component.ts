import {Component} from "@angular/core";
import {Person} from "../../model/Person";
import {PersonService} from "../../services/person.service";
import {PersonViewTO} from "../../model/PersonViewTO";


@Component({
  moduleId: module.id,
  selector: 'person-list',
  templateUrl: 'person-list.component.html',
  providers: [PersonService],
})
export class PersonListComponent{

  persons: Person;
  personVievTOs: PersonViewTO;

  errorMessage: string;

  constructor(private _service: PersonService){
  }

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

  refresh(){
    this.getPersons();
  }


  // getPersons2() {
  //   this._service.getPersons()
  //     .subscribe(
  //       r => this.persons = r,
  //       error =>  this.errorMessage = <any>error);
  // }

  delete(id: any): void {
    this._service
      .delete(id)
      .then(() => null);
    this.getPersons();
    this.refresh();
  }

  // find(value: any): void {
  //   // this._service.find(value)
  //   //   .then(() => null);
  //   this.getPersons();
  // }
  // delete(person: Person): void {
  //   this._service                      //Czemu to nie działa, a metoda wyżej działa ???
  //     .delete(person.id)
  //     .then(() => null);
  // }

}
