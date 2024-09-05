import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TostServiceService } from '../services/tost-service.service';
import { catchError, EMPTY } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
   const tostServices = inject(TostServiceService) ;
   return next(req).pipe(catchError((error)=>{
    tostServices.showError(error.message);
    return EMPTY;
   }))
};
