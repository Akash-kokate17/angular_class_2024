import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
  inputs:['users'],
  outputs:['deleteEvent']
})
export class UserListComponent {
users:any;

deleteEvent = new EventEmitter()

deleteUser(id:any){
  this.deleteEvent.emit(id);
}
}
