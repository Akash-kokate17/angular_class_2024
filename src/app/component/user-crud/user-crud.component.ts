import { Component } from '@angular/core';
import * as data from './user.json'
import { UserListComponent } from '../user-list/user-list.component';
import { CommonModule } from '@angular/common';
import { UserAddComponent } from '../user-add/user-add.component';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-user-crud',
  standalone: true,
  imports: [CommonModule,UserListComponent,UserAddComponent],
  templateUrl: './user-crud.component.html',
  styleUrl: './user-crud.component.css'
})
export class UserCrudComponent {

users = (data as any).default;
id:any;
deleteUser(userToDelete:any){
  this.users = this.users.filter((user:any)=>user.id !== userToDelete)
 };

 addNewUser(newUser:any){
  this.id = this.users.length + 1
  newUser.id = this.id;
  if(newUser.name !== '' && newUser.address !== '' && newUser.email !== '' && newUser.phone !== ''){
    this.users.push(newUser)
  }else{
    Swal.fire("all filed are mandatory")
  }
 }
}
