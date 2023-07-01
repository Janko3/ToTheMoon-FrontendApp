import { Component, Input } from '@angular/core';
import { Post } from 'src/app/model/post';
import User from 'src/app/model/user';
import { PostService } from 'src/app/service/post/post.service';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  loggedUser!: User;
  @Input() post!: Post;
  isEditing!: boolean;
  
  constructor(private postService: PostService,private userService: UserService){}

  ngOnInit() {
    this.userService.whoAmI().subscribe(data => this.loggedUser = data);
    this.isEditing = false;
  }
}
