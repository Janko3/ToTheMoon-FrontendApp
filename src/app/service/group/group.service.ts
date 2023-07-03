import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Group } from 'src/app/model/group';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private apiUrl = 'http://localhost:8080/api/groups'
  constructor(private http: HttpClient) { }

  createGroup(name: String,description: String): Observable<Group>{
    return this.http.post<Group>(this.apiUrl,{name,description})
  }
  getGroups(): Observable<Group[]>{
    return this.http.get<Group[]>(this.apiUrl);
  }
  getGroupById(id: number):Observable<Group>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Group>(url);
  }
  updateGroup(group: Group,id: number): Observable<Group>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Group>(url,{...group});
  }
  deleteGroup(id: number): Observable<Group>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Group>(url);
  }
  getUserGroups(): Observable<Group[]>{
    const url = `${this.apiUrl}/userGroups/all`
    return this.http.get<Group[]>(url);
  }
}
