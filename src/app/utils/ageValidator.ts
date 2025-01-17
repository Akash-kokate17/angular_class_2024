import { AbstractControl, ValidatorFn } from "@angular/forms";


export function ageRangeValidator(min:number,max:number):ValidatorFn{
    return (control:AbstractControl)=>{
        if(control.value !== undefined && (isNaN(control.value)) ||control.value < min || control.value > max){
            return {'ageRange':true}
        }
        return null;
    }
}