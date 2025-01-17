import { Component } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-message3',
  standalone: true,
  imports: [],
  templateUrl: './message3.component.html',
  styleUrl: './message3.component.css'
})
export class Message3Component {
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
