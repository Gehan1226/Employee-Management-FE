import { Component, OnInit } from '@angular/core';
import { Role, RoleService } from '../../../services/role/role.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgForOf } from '@angular/common';
import { Department, DepartmentService } from '../../../services/department/department.service';
import { EmployeeService, Employee } from '../../../services/employee/employee.service';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormsModule, NgForOf, ReactiveFormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent implements OnInit {

  public employeeForm: FormGroup;

  roles: Role[] = [];
  selectedRole: Role | null = null;

  departments: Department[] = [];

  constructor(
    private roleService: RoleService, 
    private departmentService: DepartmentService, 
    private emplyeeService: EmployeeService
  ){
    this.employeeForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      departmentId: new FormControl('', [Validators.required]),
      roleId: new FormControl('', [Validators.required])
    });
  }

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

  onRegister() {
    const employee: Employee ={
      id: 0,
      firstName: this.employeeForm.value['firstName'],
      lastName: '',
      email: '',
      dob: this.employeeForm.value['dob'],
      phoneNumber: '',
      gender: '',
      department: this.employeeForm.value['department'],
      role: this.employeeForm.value['role']
    } 
    console.log(employee)
    // this.emplyeeService.addEmployee()
  }
}
