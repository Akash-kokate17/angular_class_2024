import { Component } from '@angular/core';
import { CrudSubjectService } from '../../services/crud-subject.service';

@Component({
  selector: 'app-crud-using-subject',
  standalone: true,
  imports: [],
  templateUrl: './crud-using-subject.component.html',
  styleUrls: ['./crud-using-subject.component.css']
})
export class CrudUsingSubjectComponent {
 constructor(private crudSubjectService:CrudSubjectService){}
  addNewEmp(uName:string,phoneNo:number ){
   let newEmp = {uName,phoneNo};
   this.crudSubjectService.addEmp(newEmp)
  }
}
