import { Component, ViewEncapsulation } from '@angular/core';
import { DatabindingassignmentComponent } from '../databindingassignment/databindingassignment.component';
import { Demo1Component } from '../demo1/demo1.component';
import { DirectivesComponent } from '../directives/directives.component';
import { Demo2Component } from '../demo2/demo2.component';
import { MyModelComponent } from '../my-model/my-model.component';
import { ProductsComponent } from '../products/products.component';
import { EmployeeCrudComponent } from '../employee-crud/employee-crud.component';
import { PipesComponent } from '../pipes/pipes.component';
import { ParentComponent } from '../parent/parent.component';
import { UserCrudComponent } from '../user-crud/user-crud.component';
import { TraficLightComponent } from '../trafic-light/trafic-light.component';
import { Math1Component } from '../math1/math1.component';
import { Math2Component } from '../math2/math2.component';
import { CommentsComponent } from '../comments/comments.component';
import { EmployeesComponent } from '../employees/employees.component';
import { HttpDemo1Component } from '../http-demo1/http-demo1.component';
import { CrudAppHttpClientComponent } from '../../crud-app-http-client/crud-app-http-client.component';
import { ObservableDemo1Component } from '../observable-demo1/observable-demo1.component';
import { CommonModule } from '@angular/common';
import { ObservableDemo2Component } from '../observable-demo2/observable-demo2.component';
import { ObservableDemo3Component } from '../../componet/observable-demo3/observable-demo3.component';
import { SubjectDemo1Component } from '../subject-demo1/subject-demo1.component';
import { Message1Component } from '../message1/message1.component';
import { Message2Component } from '../message2/message2.component';
import { Message3Component } from '../message3/message3.component';
import { CrudUsingSubjectComponent } from '../crud-using-subject/crud-using-subject.component';
import { CrudTable1Component } from '../crud-table1/crud-table1.component';
import { CrudTable2Component } from '../crud-table2/crud-table2.component';
import { SignalDemoComponent } from '../signal-demo/signal-demo.component';
import { FormDemo1Component } from '../form-demo1/form-demo1.component';
import { FormAssignmentComponent } from '../form-assignment/form-assignment.component';
import { FormDemo2Component } from '../form-demo2/form-demo2.component';
import { FormDemo3Component } from '../form-demo3/form-demo3.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule,DatabindingassignmentComponent,Demo1Component,DirectivesComponent,
    Demo2Component,MyModelComponent,ProductsComponent,EmployeeCrudComponent
    ,PipesComponent,ParentComponent,UserCrudComponent,TraficLightComponent,
    Math1Component,Math2Component,CommentsComponent,EmployeesComponent,
    HttpDemo1Component,CrudAppHttpClientComponent,ObservableDemo1Component,ObservableDemo2Component,
    ObservableDemo3Component,SubjectDemo1Component,Message1Component,Message2Component,Message3Component,
    CrudUsingSubjectComponent,CrudTable1Component,CrudTable2Component,SignalDemoComponent,FormDemo1Component,
    FormAssignmentComponent,FormDemo2Component,FormDemo3Component,RouterOutlet
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
  // encapsulation:ViewEncapsulation.ShadowDom
})
export class BodyComponent {
 flag = true;
}
