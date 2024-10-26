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
  
  constructor(private http: HttpClient) {}

  addRole(role: Role): Observable<Role> {
    return this.http.post<Role>('http://localhost:8080/role/add-role', role);
  }

  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>('http://localhost:8080/role/get-all');
  }
}
