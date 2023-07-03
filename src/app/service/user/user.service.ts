import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import User from 'src/app/model/user';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private baseURL: string = "http://localhost:8080/api/users/whoami"

currentUser : any;
  constructor(private httpClient: HttpClient,private localStorage:LocalStorageService) {

   }
   

   whoAmI(): Observable<User>{
   return this.httpClient.get<User>(this.baseURL,{
      headers:{
        Authorization: `${this.localStorage.getItem("jwt")}`
      }
    }).pipe(map(user =>{
      this.currentUser = user;
      return user;
    }))
   }
   
   updateUser(newUser: User): Observable<User>{
    return this.httpClient.put<User>("http://localhost:8080/api/users/edit",newUser);
   }
}
