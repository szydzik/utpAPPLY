import {Component} from "@angular/core";
import {Person} from "../../model/Person";

@Component({
  moduleId: module.id,
  selector: 'person-details',
  templateUrl: 'person-details.component.html'
})
export class PersonDetailComponent  {

  person : Person;
  ages = [1,2,3,4,5,6,7,8,9,10];

  ngOnInit() {
    this.person = new Person(11, "Grześ", "Dębkowski", 11);
  }


  submitted = false;
  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.person); }

}
