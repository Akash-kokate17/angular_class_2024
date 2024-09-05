import { Component } from '@angular/core';
import { EmployeeServicesService } from '../../services/employee-services.service';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css',
})
export class EmployeesComponent {
  constructor(public employeeServices: EmployeeServicesService) {}

  employees: any;

  ngOnInit() {
    this.employees = this.employeeServices.allEmp()
  }

  allEmp() {
    this.employees = this.employeeServices.allEmp();
  }
  allMaleEmp() {
    this.employees = this.employeeServices.allMaleEmp();
  }
  allFemaleEmp() {
    this.employees = this.employeeServices.allFemaleEmp();
  }
}
