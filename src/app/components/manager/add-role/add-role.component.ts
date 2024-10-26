import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Role, RoleService } from '../../../services/role/role.service';

@Component({
  selector: 'app-add-role',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-role.component.html',
  styleUrl: './add-role.component.css'
})
export class AddRoleComponent {

  public roleForm: FormGroup;

  constructor( private roleService: RoleService ) {
    this.roleForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    });
  }

  addRole(): void {
    if (this.roleForm.valid) {
      const role: Role = this.roleForm.value;
      this.roleService.addRole(role).subscribe((response) => {
        console.log(response);
      });
    }
  }
}
