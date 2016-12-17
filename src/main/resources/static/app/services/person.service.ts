import { Injectable } from '@angular/core';
import {Person} from "../model/Person";
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {Configuration} from "../app.constants";
// import {Observable} from "rxjs";

@Injectable()
export class PersonService {

  private actionUrl: string;
  private headers: Headers;


  constructor(private _http: Http, private _configuration: Configuration) {
    this.actionUrl = _configuration.ServerWithApiUrl + '/person';
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }


  getPersons(): Promise<Person> {
    return this._http.get(this.actionUrl)
      .toPromise()
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        throw err;
      });
  }

  // public getAll = (): Observable<Person[]> => {
  //   return this._http.get(this.actionUrl)
  //     .map((response: Response) => <Person[]>response.json())
  //     .catch(this.handleError);
  // }
  //
  // public getSingle = (id: number): Observable<Person> => {
  //   return this._http.get(this.actionUrl + id)
  //     .map((response: Response) => <Person>response.json())
  //     .catch(this.handleError);
  // }


  // private handleError(error: Response) {
  //   console.error(error);
  //   return Observable.throw(error.json().error || 'Server error');
  // }
}
