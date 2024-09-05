import { Component, OnInit } from '@angular/core';
import { CrudEmpService } from '../services/crud-emp.service';
import { Employee, IEmployee } from '../model/employee';

@Component({
  selector: 'app-crud-app-http-client',
  standalone: true,
  imports: [],
  templateUrl: './crud-app-http-client.component.html',
  styleUrls: ['./crud-app-http-client.component.css'],
})
export class CrudAppHttpClientComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private crudEmpService: CrudEmpService) {}

  ngOnInit() {
    this.fetchEmp();
  }

  fetchEmp() {
    this.crudEmpService.fetchEmp().subscribe(
      (allEmp: Employee[])  => {
        this.employees = allEmp;
        console.log('Fetched employees:', allEmp);
      },
      (error: any) => {
        console.error('Error fetching employees:', error);
      },
      () => {
        console.log('All employees fetched successfully');
      }
    );
  }

  deleteEmp(id: number){
    this.crudEmpService.deleteEmp(id).subscribe(
      (response: any) => {
        console.log('Employee deleted successfully', response);
        this.employees = this.employees.filter((emp: any) => emp.id !== id);
      },
      (error: any) => {
        console.error('Error deleting employee:', error);
      }
    );
  }

  addEmp(name: string, userName: string, email: string, address: string) {
    const nextId = this.employees.length + 1;
    console.log('newId', nextId);
    const newEmp = {
      id: nextId.toString(),
      name: name,
      username: userName,
      email: email,
      address: address

    };
    console.log('New employee:', newEmp);
    this.crudEmpService.addEmp(newEmp).subscribe(
      (response:any) => {
        this.employees.push(response);
      },
      (error: any) => {
        console.error('Employee not added:', error);
      }
    );
  }
}
