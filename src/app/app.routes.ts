import { Routes } from '@angular/router';
import { ManagerLayoutComponent } from './layout/manager-layout/manager-layout.component';
import { DashboardComponent } from './components/manager/dashboard/dashboard.component';
import { AddEmployeeComponent } from './components/manager/add-employee/add-employee.component';
import { AddRoleComponent } from './components/manager/add-role/add-role.component';
import { AddDepartmentComponent } from './components/manager/add-department/add-department.component';

export const routes: Routes = [
    { 
        path: 'manager', 
        component: ManagerLayoutComponent, 
        children: [
          { path: 'dashboard', component: DashboardComponent } , 
          { path: 'add-employee', component: AddEmployeeComponent } ,
          { path: 'add-role', component: AddRoleComponent } ,
          { path: 'add-department', component: AddDepartmentComponent } 
        ] 
      }
]
