import { Injectable } from '@angular/core';
import {Person} from "../model/Person";
import {Http, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PersonService {

  constructor(private http: Http) {
  }

  getPersons(): Promise<Person> {
    return this.http.get("http://localhost:8080/api/person-list")
      .toPromise()
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        throw err;
      });
  }

}
