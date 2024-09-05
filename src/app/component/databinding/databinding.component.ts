import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
   name = 'Akash'
   img_url = 'https://wallpaper-house.com/data/out/8/wallpaper2you_253838.jpg'
   flag = false
   userId = 1

   f1(){
    console.log('f1.....')
   }
   changeName(){
    this.name = 'Sachin Tendulkar'
    this.userId = 15
   }
  //  changedUserId(){
  //   console.log('changed user id',this.userId)
  //  }
  changedUserId(evt:any){
  console.log(evt,"changed no")
  }

}
