import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  constructor(private activatedRoute:ActivatedRoute){}

  user:any;

  ngOnInit(){
    this.activatedRoute.queryParams.subscribe((data)=>{
      this.user = data;
    })
  }
}
