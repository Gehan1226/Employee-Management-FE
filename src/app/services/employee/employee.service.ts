import { Injectable } from '@angular/core';
import { Department } from '../department/department.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Role } from '../role/role.service';

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  dob: Date;
  phoneNumber: string;
  gender: string;
  department: Department;
  role: Role;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>('http://localhost:8080/emplyee/add-employee', employee);
  }
}
