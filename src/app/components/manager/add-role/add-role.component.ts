import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-role',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './add-role.component.html',
  styleUrl: './add-role.component.css'
})
export class AddRoleComponent {

  public roleForm: FormGroup;

  constructor(private http: HttpClient) {
    this.roleForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    });
  
  }

  addEmployee() {
    console.log('Role added', this.roleForm);
    
  };

}
