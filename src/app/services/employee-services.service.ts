import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeServicesService {
  constructor() {}

    employees:any = [
    {id:1,name:'sanjay',sal:5000,gender:'male'},
    {id:5,name:'gita',sal:1000,gender:'female'},
    {id:2,name:'akash',sal:2000,gender:'male'},
    {id:7,name:'pooja',sal:2000,gender:'female'},
    {id:3,name:'ramesh',sal:3000,gender:'male'},
    {id:4,name:'suresh',sal:5500,gender:'male'},
    {id:6,name:'seeta',sal:7500,gender:'female'},
    {id:8,name:'sakshi',sal:2500,gender:'female'},
    {id:9,name:'suraj',sal:4500,gender:'male'},
    {id:10,name:'teena',sal:8000,gender:'female'},
   ]

   allEmp(){
   return this.employees;
   };
   
   allMaleEmp(){
   return this.employees.filter((emp:any)=>emp.gender === 'male')
   }
   allFemaleEmp(){
   return this.employees.filter((emp:any)=>emp.gender === 'female')
   }
}
