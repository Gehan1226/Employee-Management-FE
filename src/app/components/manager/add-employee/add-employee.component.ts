import { Component, OnInit } from '@angular/core';
import { Role, RoleService } from '../../../services/role/role.service';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';
import { Department, DepartmentService } from '../../../services/department/department.service';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormsModule, NgForOf],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent  implements OnInit {

  roles: Role[] = []; 
  selectedRole: Role | null = null; 

  departments: Department[] = []; 
  selectedDepartment: Department | null = null; 

  constructor(private roleService: RoleService, private departmentService: DepartmentService) {}

  ngOnInit(): void {
    this.loadDepartments();
    this.loadRoles(); 
  } 

  loadRoles(): void {
    this.roleService.getRoles().subscribe({
      next: (roles) => {
        console.log('Fetched roles:', roles);
        this.roles = roles;
      },
      error: (error) => {
        console.error('Error fetching roles:', error);
      },
      complete: () => {
        console.log('Role fetching complete.');
      }
    });
  }

  loadDepartments(): void {
    this.departmentService.getDepartments().subscribe({
      next: (departments) => {
        console.log('Fetched roles:', departments);
        this.departments = departments;
      },
      error: (error) => {
        console.error('Error fetching departments:', error);
      },
      complete: () => {
        console.log('Departments fetching complete.');
      }
    });
  }
}
