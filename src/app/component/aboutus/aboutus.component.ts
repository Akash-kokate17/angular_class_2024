import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {
  constructor(private router: Router , private location : Location){};

  goToUsersPage(){
    this.router.navigate(['/users'])
  }

  goToBack(){
 this.location.back()
  }

  goToForward(){
   this.location.forward()
  }

  goBackByHistory(){
    this.location.historyGo(-2)
  }
}
