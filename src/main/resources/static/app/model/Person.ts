import {Address} from "./Address";

export class Person {

  id : number;
  name : string;
  surname: string;
  age: number;
  address: Address;

  constructor(){
    this.address = new Address();
  }


}
