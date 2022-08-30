import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';


const routes: Routes = [
  { path: 'EmployeeList', component: EmployeeListComponent },
  { path: 'AddEmployee', component: AddEmployeeComponent },
  { path: 'EditEmployee', component: EditEmployeeComponent },
  { path: 'EmployeeDetails', component: EmployeeDetailsComponent },
  
  //{ path: 'EmployeeList', component: EmployeeListComponent }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
