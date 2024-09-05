import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserServicesService } from '../services/user-services.service';
import Swal from 'sweetalert2';

export const teacherGuard: CanActivateFn = (route, state) => {
  let user = inject(UserServicesService)

  if(user.getMyRole() === 'teacher'){
    return true
  }else{
    Swal.fire('You Have Not Permeation To Access This Route')
    return false
  }

};
