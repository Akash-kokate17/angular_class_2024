export interface IEmployee {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    city: string;
  };
}

export class Employee {
  constructor(
    public id: number,
    public name: string,
    public username: string,
    public email: string,
    public address: {
      city: string;
    }
  ) {}

 namePlusUserName(){
   return this.name + " " + this.username
 }  
}
