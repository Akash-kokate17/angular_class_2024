import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // let myToken = sessionStorage.getItem('token');
  let myToken = 'ABCDEF89809'
  const requestWithToken = req.clone({
    setHeaders:{
      Authorization:`Bearer ${myToken}`
    }
  })
  return next(requestWithToken);
};
