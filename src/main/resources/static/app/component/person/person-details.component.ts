import {Component, Input, OnInit} from "@angular/core";
import {Person} from "../../model/Person";
import {PersonService} from "../../services/person.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";


@Component({
  moduleId: module.id,
  selector: 'person-details',
  templateUrl: 'person-details.component.html',
  providers: [PersonService],
})
export class PersonDetailsComponent implements OnInit {

  ages = [16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
  errorMessage: string;
  private sub:any;
  @Input() person: Person;
  submitted = false;

  constructor(
    private _service: PersonService,
    private route: ActivatedRoute,
    private location: Location
    ) {}

  ngOnInit() {
    // Subscribe to route params
    this.sub = this.route.params.subscribe(params => {
      let id = params['id'];
      console.log("Debug: ID = "+id);
      if (id){
        this.getPerson(id);
      }else {
        this.person = new Person();
      }
    });

  }

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.person); }

  newPerson(){
    this.submitted = false;
  }

  getPerson(id: number) {
    this._service
      .find(id)
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

  ngOnDestroy() {
    // Clean sub to avoid memory leak
    this.sub.unsubscribe();
  }

  add(): void {
    this._service.create(this.person)
      .then(p => {
        this.person=p;
      });
  }

  delete(): void {
    this._service
      .delete(this.person.id)
      .then(() => null);
  }

  goBack(): void {
    this.location.back();
  }

}
