import { Component, OnInit } from '@angular/core';
import { Role, RoleService } from '../../../services/role/role.service';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';

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

  constructor(private roleService: RoleService) {}

  ngOnInit(): void {
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
}
