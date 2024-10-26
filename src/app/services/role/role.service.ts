import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Role {
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  
  private apiUrl = 'http://localhost:8080/role/add-role'; 

  constructor(private http: HttpClient) {}

  addRole(role: Role): Observable<Role> {
    return this.http.post<Role>(this.apiUrl, role);
  }

}
