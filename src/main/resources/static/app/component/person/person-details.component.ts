import {Component} from "@angular/core";
import {Person} from "../../model/Person";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  moduleId: module.id,
  selector: 'person-details',
  templateUrl: 'person-details.component.html'
})
export class PersonDetailComponent  {

  ages = [0,1,2,3,4,5,6,7,8,9,10];
  person =  new Person(11, "Grześ", "Dębkowski", this.ages[1]);

  ngOnInit() {
  }


  submitted = false;
  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.person); }

  newPerson(){
    this.submitted = false;
    this.person = new Person(100, '', '', 0);
  }

}
