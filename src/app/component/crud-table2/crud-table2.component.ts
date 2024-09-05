import { Component } from '@angular/core';
import { CrudSubjectService } from '../../services/crud-subject.service';

@Component({
  selector: 'app-crud-table2',
  standalone: true,
  imports: [],
  templateUrl: './crud-table2.component.html',
  styleUrl: './crud-table2.component.css'
})
export class CrudTable2Component {
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
