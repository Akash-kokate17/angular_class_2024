import { Component } from '@angular/core';
import { CommentsService } from '../../services/comments.service';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent {
 constructor(public commentsService :CommentsService){};

 comments:any;

 ngOnInit(){
  this.commentsService.fetchComments().subscribe((response:any)=>{
    return this.comments = response;
  })
 }
}
