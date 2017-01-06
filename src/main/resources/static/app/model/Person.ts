import {Address} from "./Address";

export class Person {

  id : number;
  name : string;
  surname: string;
  age: number;
  dateOfBirth: Date;
  address: Address;

  constructor(){
    this.address = new Address();
    this.dateOfBirth = new Date();
  }


}
