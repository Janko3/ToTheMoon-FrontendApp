import { Component } from '@angular/core';
import User from 'src/app/model/user';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  user!: User;

  constructor(private userService: UserService){}
  ngOnInit() {
    this.userService.whoAmI().subscribe(data => this.user = data);
  }
}
