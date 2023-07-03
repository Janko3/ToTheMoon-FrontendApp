import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import User from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth/auth.service';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-update-profil',
  templateUrl: './update-profil.component.html',
  styleUrls: ['./update-profil.component.css']
})
export class UpdateProfilComponent {
  updateForm: FormGroup;
  @Input()user!: User;

  constructor(private formBuilder: FormBuilder, private authService: AuthService,private userService: UserService,private router: Router) {
    this.updateForm = this.formBuilder.group({
     
      email: ['',Validators.required],
      firstName: ['',Validators.required],
      lastName: ['',Validators.required]

    })
  }

  onSubmit() {
   // const username = this.updateForm.get('username')?.value;
    const email = this.updateForm.get('email')?.value;
    const firstName = this.updateForm.get('firstName')?.value;
    const lastName = this.updateForm.get('lastName')?.value;
    this.userService.updateUser({...this.user,email: email, firstName: firstName,lastName: lastName}).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
        
      }
    });
    this.router.navigate(["/login"])
    
  }
}
