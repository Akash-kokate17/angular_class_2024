import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { CareersComponent } from './component/careers/careers.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ProductsComponent } from './component/products/products.component';
import { ProductsDetailsComponent } from './component/products-details/products-details.component';
import { EmployeeCrudComponent } from './component/employee-crud/employee-crud.component';
import { UserDetailsComponent } from './component/user-details/user-details.component';
import { ParentComponent } from './component/parent/parent.component';
import { ContractComponent } from './component/contract/contract.component';
import { PermanentComponent } from './component/permanent/permanent.component';
import { teacherGuard } from './guards/teacher.guard';
import { childProtectedGuard } from './guards/child-protected.guard';
import { pageHasChangesGuard } from './guards/page-has-changes.guard';
import { ProductListComponent } from './component/product-list/product-list.component';
import { productDetailsResolver } from './resolvers/product-details.resolver';
import { Component } from '@angular/core';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'aboutUs', component: AboutusComponent },
  {
    path: 'careers',
    component: CareersComponent,
    children: [
      { path: 'permanent', component: PermanentComponent },
      { path: 'contract', component: ContractComponent },
    ],
    canActivateChild:[childProtectedGuard],
    canDeactivate:[pageHasChangesGuard]
  },
  { path:'products',
    loadComponent:()=>import('./component/product-list/product-list.component').then((x)=>x.ProductListComponent),
    canActivate:[teacherGuard]
   },
  { path: 'productsDetails/:id', component: ProductsDetailsComponent ,
    resolve:{product:productDetailsResolver}
  },
  { path: 'users', component: EmployeeCrudComponent },
  { path: 'usersDetails', component: UserDetailsComponent },
  { path: '**', component: NotFoundComponent },
];
