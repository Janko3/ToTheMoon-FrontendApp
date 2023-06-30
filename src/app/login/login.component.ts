import { Component } from '@angular/core';
import { AuthService } from '../service/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private authService: AuthService, private formBuilder: FormBuilder,private router:Router,private userService:UserService) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    })
  }

  submitLogin() {
    
    
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;
    this.authService.login(username, password);
//    this.router.navigate(['home'])

  }
  
}
