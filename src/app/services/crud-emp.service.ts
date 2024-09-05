import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Employee, IEmployee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class CrudEmpService {

  constructor(private httpClient: HttpClient) { }

  fetchEmp(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>('https://jsonplaceholder.typicode.com/users').pipe( 
      map((response: any[]) => {
        return response.map(obj => new Employee(
          obj.id,
          obj.name,
          obj.username,
          obj.email,
          obj.address.city 
        ));
      })
    );
  }

  deleteEmp(id: any) { 
    return this.httpClient.delete(`http://localhost:3000/employees/${id}`); 
  }

  addEmp(newEmp: any) { 
    return this.httpClient.post('http://localhost:3000/employees', newEmp); 
}
}
