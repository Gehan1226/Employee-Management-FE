import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Department, DepartmentService } from '../../../services/department/department.service';

@Component({
  selector: 'app-add-department',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-department.component.html',
  styleUrl: './add-department.component.css'
})
export class AddDepartmentComponent {

  public departmentForm: FormGroup;

  constructor( private departmentService: DepartmentService ) {
    this.departmentForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    });
  }

  addDepartment(): void {
    if (this.departmentForm.valid) {
      const department: Department = this.departmentForm.value;
      this.departmentService.addDepartment(department).subscribe((response) => {
        console.log(response);
      });
    }
  }
}
