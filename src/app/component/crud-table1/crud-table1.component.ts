import { Component } from '@angular/core';
import { CrudSubjectService } from '../../services/crud-subject.service';

@Component({
  selector: 'app-crud-table1',
  standalone: true,
  imports: [],
  templateUrl: './crud-table1.component.html',
  styleUrl: './crud-table1.component.css'
})
export class CrudTable1Component {
  employees: any[] = [];

  constructor(private crudSubjectService: CrudSubjectService) {}

  ngOnInit() {
    this.fetchEmp();
  }

  fetchEmp() {
    this.crudSubjectService.showData().subscribe((data: { user: any[] }) => {
      this.employees = data.user;  
      console.log(this.employees, 'emp');
    });
  }
}
