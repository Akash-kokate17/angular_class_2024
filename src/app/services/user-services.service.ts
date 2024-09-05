import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor(private httpClient:HttpClient) { }
  role = 'teacher'
   findUserByEmail (email:string): Observable<any>{
   return this.httpClient.get(`https://jsonplaceholder.typicode.com/users?email=${email}`)
  }

  getMyRole(){
   return this.role
  }
}
