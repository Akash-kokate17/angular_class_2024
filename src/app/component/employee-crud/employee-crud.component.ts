import { Component } from '@angular/core';
import * as usersData from './employee.json';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-employee-crud',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './employee-crud.component.html',
  styleUrl: './employee-crud.component.css',
})
export class EmployeeCrudComponent {
  // users = (usersData as any).default;

  modalUser: any;
  users:any;

  constructor(private http:HttpClient){

  }
  ngOnInit(){
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((response:any)=>{
      this.users = response;
    })
  }

  addUser( NewName: string, username: string, email: string, number: string, city: string) {
    let newUser = {
      id: this.users.length + 1,
      name: NewName,
      username: username,
      email: email,
      phone: number,
      address: { city: city },
    };
    console.log(newUser);
    if (  NewName !== '' &&  username !== '' &&  email !== '' &&  number !== '' && city !== ''
    ) {
      this.users.push(newUser);
      let input = document.getElementsByTagName('input');
      for (let i = 0; i < input.length; i++) {
        input[i].value = '';
      }
    } else {
      Swal.fire('All filed are mandatory');
    }
  }

  showUserInModal(user: any) {
    this.modalUser = user;
    console.log(this.modalUser, 'this.modalUser');
    console.log(this.users, 'this.users');
  }

  deleteUser(id: any) {
    this.users = this.users.filter((user: any) => user.id !== id);
    Swal.fire(`User ${id} deleted successfully`);
  }
}
