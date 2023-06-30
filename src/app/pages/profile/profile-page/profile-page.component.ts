import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/model/post';
import User from 'src/app/model/user';
import { LocalStorageService } from 'src/app/service/local-storage/local-storage.service';
import { PostService } from 'src/app/service/post/post.service';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
})
export class ProfilePageComponent {
  user!: User;
  posts!: Post[];
  userId!: number;

  constructor(
    private userService: UserService,
    private postService: PostService,
    private localStorageService: LocalStorageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log('Bilo sta');
    this.route.paramMap.subscribe((params) => {
      this.userId = Number(params.get('id'));
    });
    this.user = JSON.parse(this.localStorageService.getItem('user'));
    this.postService.findAllPostsByUser(this.userId).subscribe((data) => {
      console.log(data);
      this.posts = data;
    });
  }
}
