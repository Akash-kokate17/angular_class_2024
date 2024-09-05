import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudSubjectService {
 user :any = []
  private empSubject = new BehaviorSubject<{ user: any[] }>({ user: [] });

  constructor(private httpClient: HttpClient) {
    this.fetchEmp();
  }
  
  fetchEmp(): void {
    this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/users').subscribe(
      (data: any[]) => {
        const currentState = this.empSubject.value;
        this.empSubject.next({ user: [...currentState.user, ...data] });
      },
      (error) => console.error('Error fetching employees', error)
    );
  }

  showData() {
    return this.empSubject.asObservable();
  }

  addEmp(newEmp:{uName:string,phoneNo:number}){
    const previousData =this.empSubject.value;
   this.empSubject.next({user:[...previousData.user,newEmp]})
  }
}
