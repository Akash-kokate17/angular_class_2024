import { AbstractControl } from "@angular/forms";
import { map } from "rxjs";

export function userExistValidator(user:any){
  return (control:AbstractControl) =>{
    return user.findUserByEmail(control.value).pipe(
        map((user:any)=>user.length > 0 ? {"userExist":true}:null)
    )
  }
}