import {Address} from "./Address";

export class Department {

  id : number;
  name : string;
  address: Address;

  constructor(){
    this.address = new Address();
  }


}
