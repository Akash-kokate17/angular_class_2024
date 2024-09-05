import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ageRangeValidator } from '../../utils/ageValidator';
import { userExistValidator } from '../../utils/userExistValidation';
import { UserServicesService } from '../../services/user-services.service';

@Component({
  selector: 'app-form-demo2',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './form-demo2.component.html',
  styleUrl: './form-demo2.component.css'
})
export class FormDemo2Component {
  registerFrom:FormGroup;

  constructor(private formBuilder:FormBuilder, private userService:UserServicesService){

    this.registerFrom = this.formBuilder.group({
      fName:new FormControl('akash',[Validators.required]),
      lName : new FormControl('kokate',[Validators.required, Validators.minLength(5)]),
      email:new FormControl('akash@gmail.com',[Validators.required,Validators.email],[userExistValidator(userService)]),
      age:new FormControl(28,[Validators.required,ageRangeValidator(18,60)]),
      address:new FormGroup({
        city:new FormControl(),
        pin:new FormControl(),
        state:new FormControl()
      })
    }
    // ,{updateOn:'blur'}
    )
  }

  formSubmit(formData:any){
    console.log(formData.value)
  }
}
