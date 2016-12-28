import { Injectable } from '@angular/core';
import {Person} from "../model/Person";
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {Configuration} from "../app.constants";
// import {Observable} from "rxjs";
import 'rxjs/Rx';

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

  findAll (): Promise<Person> {
    return this._http.get(this.actionUrl)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  addPerson (person: Person): Promise<Person> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.actionUrl, { person }, options)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }


  find(): Promise<Person> {
    return this._http.get(this.actionUrl+'/1')
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body;
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }


  // public findById = (id: number): Observable<Person> => {
  //   return this._http.get(this.actionUrl + id)
  //     .map((response: Response) => <Person>response.json())
  //     .catch(this.handleError);
  // }
  //////////////////////////////////////////////////////////////////////////
  // getPersons (): Observable<Person[]> {
  //   return this._http.get(this.actionUrl)
  //     .map(this.extractData)
  //     .catch(this.handleError);
  // }

}
