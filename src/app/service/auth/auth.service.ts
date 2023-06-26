import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { JwtUtilsService } from '../jwt/jwt-utils.service';
import { Observable, catchError, map, throwError } from 'rxjs';
@Injectable({providedIn: 'root'})
export class AuthService {
  private readonly baseURL = 'http://localhost:8080/api/users'
  constructor(private httpClient: HttpClient,private router: Router,private jwtUtilsService:JwtUtilsService) {

   }
  private accessToken = null;

  
  login(username: string, password: string){
    let headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
   
    return this.httpClient.post(this.baseURL + "/login", {username,password}, { headers })
    .pipe(map((res:any )=>{
      console.log('login succes');
      this.accessToken = res.accessToken;
      localStorage.setItem("jwt", res.accessToken)
    }
    ))
 /*   .pipe(map((res) => {
      console.log('Login success');
      this.access_token = res.accessToken;
      localStorage.setItem("jwt", res.accessToken)
    })); */
  }

  public register(username: string, password: string, email: string, firstName: string, lastName: string): void {
    this.httpClient.post<any>(
      this.baseURL,
      {
        username,
        password,
        email,
        firstName,
        lastName
      }
    ).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err)
      }
    })
    this.router.navigate(['login']);
  }
  tokenIsPresent() {
    return this.accessToken != undefined && this.accessToken != null;
  }
  getToken() {
    return this.accessToken;
  }
}