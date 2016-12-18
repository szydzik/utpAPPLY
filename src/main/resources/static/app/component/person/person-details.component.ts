import {Component} from "@angular/core";
import {Person} from "../../model/Person";
import {FormBuilder, FormGroup} from "@angular/forms";
import {PersonService} from "../../services/person.service";

@Component({
  moduleId: module.id,
  selector: 'person-details',
  templateUrl: 'person-details.component.html',
  providers: [PersonService],
})
export class PersonDetailComponent  {

  ages = [0,1,2,3,4,5,6,7,8,9,10];
  errorMessage: string;
  person: Person;

  constructor(private _service: PersonService){}

  ngOnInit() {
    this.getPerson();
  }


  submitted = false;
  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.person); }

  newPerson(){
    this.submitted = false;
  }

  // getPerson() {
  //   console.log('ddddddddddd: '+this._service.getPerson());
  //   this._service.getPerson()
  //     .then(
  //       (value: Person) => {console.log('Debug: ' + value); this.person = value;},
  //       error =>  this.errorMessage = <any>error);
  //
  //   console.log('Error: '+this.errorMessage);
  //   console.log('Person: '+this.person);
  // }

  getPerson() {
    this._service
      .getPerson()
      .then((result) => {
        console.log('ddddddddddd:', result);
        return result;
      })
      .then(
        value => this.person = value,
        error =>  this.errorMessage = <any>error
      )
      .then(() => {
        console.log('Error:', this.errorMessage);
        console.log('Person:', this.person);
      });
  }

  // addPerson (name: string) {
  //   if (!name) { return; }
  //   this._service.addPerson(this.person)
  //     .then(
  //       hero  => this.heroes.push(hero),
  //       error =>  this.errorMessage = <any>error);
  // }

}
