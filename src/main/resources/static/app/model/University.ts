import {Address} from "./Address";
import {Department} from "./Department";

export class University {

  id : number;
  name : string;
  departments: Department[];
  address: Address;

  constructor(){
    this.address = new Address();
  }

}
