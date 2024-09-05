import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-assignment',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './form-assignment.component.html',
  styleUrl: './form-assignment.component.css'
})
export class FormAssignmentComponent {
 submitHandler(formData:any){
  console.log(formData)
 }
}
