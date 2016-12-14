import { Injectable } from '@angular/core';
import {Person} from "../model/Person";
import {Http, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TestService {

  constructor(private http: Http) {
  }


  /* ----------------------------------------------- Mail */


  test(): Promise<Person> {
    return this.http.get("http://localhost:8080/api/test")
      .toPromise()
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        throw err;
      });
  }

}
