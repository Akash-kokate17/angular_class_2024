import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.css',
  outputs:['newUserEvent']
})
export class UserAddComponent {
name = ''
email = ''
address = ''
phone = ''

newUser:any;

newUserEvent = new EventEmitter()

addUserDetail(){
   this.newUser= {
    name:this.name,
    email:this.email,
    address:{city:this.address},
    phone:this.phone
   }
   this.newUserEvent.emit(this.newUser);
  if(this.name !== '' && this.email !== '' && this.address !== '' && this.phone !== ''){
    this.name = '',
    this.email = '',
    this.address = '',
    this.phone = ''
  }
}
}
