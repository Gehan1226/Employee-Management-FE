import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Department {
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }

  addDepartment(department: Department): Observable<Department> {
    return this.http.post<Department>('http://localhost:8080/department/add-department', department);
  }

}
