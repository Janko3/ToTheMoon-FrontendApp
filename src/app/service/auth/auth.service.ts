import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { JwtUtilsService } from '../jwt/jwt-utils.service';
import { Observable, catchError, map, throwError } from 'rxjs';
import { UserService } from '../user/user.service';
@Injectable({providedIn: 'root'})
export class AuthService {
  private readonly baseURL = 'http://localhost:8080/api/users'
  constructor(private httpClient: HttpClient,private router: Router,private userService: UserService) {

   }
  private accessToken = null;

  
  login(username: string, password: string){
//     let headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
   
//     return this.httpClient.post(this.baseURL + "/login", {username,password}, { headers })
//     .pipe(map((res:any )=>{
//       console.log('login succes');
//       this.accessToken = res.accessToken;
//       localStorage.setItem("jwt", res.accessToken)
//     }
//     ))
//  /*   .pipe(map((res) => {
//       console.log('Login success');
//       this.access_token = res.accessToken;
//       localStorage.setItem("jwt", res.accessToken)
//     })); */
return this.httpClient
      .post<any>(
        `${this.baseURL}/login`,
        { username, password },
      )
      .subscribe({
        next: (response) => {
          localStorage.setItem('jwt', response.accessToken);
          
          this.userService.whoAmI().subscribe(data => localStorage.setItem("user",JSON.stringify(data)));
          setTimeout(() => {
            this.router.navigate(['/home']);
          }, 3000);
        },
        error: (error) => {
          console.error(error);
          
        },
      });
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
    return this.getToken()?true:false;
  }
  getToken() {
    return localStorage.getItem("jwt");
  }
  logout(): void {
    localStorage.clear();
    
  }
}