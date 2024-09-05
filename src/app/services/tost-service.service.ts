import { Injectable } from '@angular/core';
import Snackbar from 'awesome-snackbar';

@Injectable({
  providedIn: 'root'
})
export class TostServiceService {

  constructor() { }
  showError(massage:string){
    new Snackbar(massage,{
      position:'top-center',
      timeout:3000,
      theme:'light'
    })
  }
}
