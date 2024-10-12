import { Routes } from '@angular/router';
import { ManagerLayoutComponent } from './layout/manager-layout/manager-layout.component';
import { DashboardComponent } from './components/manager/dashboard/dashboard.component';

export const routes: Routes = [
    { 
        path: 'manager', 
        component: ManagerLayoutComponent, 
        children: [
          { path: 'dashboard', component: DashboardComponent } , 
        ] 
      }
];
