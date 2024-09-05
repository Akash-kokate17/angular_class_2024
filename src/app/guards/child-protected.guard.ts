import { inject } from '@angular/core';
import { CanActivateChildFn } from '@angular/router';
import { UserServicesService } from '../services/user-services.service';

export const childProtectedGuard: CanActivateChildFn = (childRoute, state) => {
  let user = inject(UserServicesService);
  if(user.getMyRole() === 'teacher'){
    return true;
  }else{
    alert("you don't have the access")
    return false;
  }
};
