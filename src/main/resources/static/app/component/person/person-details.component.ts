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

  ages = [16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
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

  getPerson() {
    this._service
      .find()
      .then((result) => {
        return result;
      })
      .then(
        value => this.person = value,
        error =>  this.errorMessage = <any>error
      )
      .then(() => {
        if (this.errorMessage) {
          console.log('Error:', this.errorMessage);
        }
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
