import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth/auth.service';
import { first, last } from 'rxjs';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.registerForm = this.formBuilder.group({
      username: ['',Validators.required],
      email: ['',Validators.required],
      password: ['',Validators.required],
      firstName: ['',Validators.required],
      lastName: ['',Validators.required]

    })
  }

  onSubmit() {
    const username = this.registerForm.get('username')?.value;
    const email = this.registerForm.get('email')?.value;
    const password = this.registerForm.get('password')?.value;
    const firstName = this.registerForm.get('firstName')?.value;
    const lastName = this.registerForm.get('lastName')?.value;
    this.authService.register(username, password, email, firstName, lastName)
    
  }

}
