import { Component } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-message2',
  standalone: true,
  imports: [],
  templateUrl: './message2.component.html',
  styleUrl: './message2.component.css'
})
export class Message2Component {
 
  constructor(private messageService:MessageService){}
  message:any = [];
  ngOnInit(){
    this.messageService.getMessage().subscribe((data)=>{
      if(data){
        this.message.push(data)
      }else{
        this.message = [];
      }
    })
  }
}
