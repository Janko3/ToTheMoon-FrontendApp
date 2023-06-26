import { Component } from '@angular/core';
import User from 'src/app/model/user';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent {
  user!: User;
  posts: {content:string}[] = [];

  constructor(private userService: UserService){

  }
  ngOnInit(){
    this.userService.whoAmI().subscribe(data => this.user = data);
  }
}

