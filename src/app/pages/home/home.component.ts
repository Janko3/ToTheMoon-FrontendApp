import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Post } from 'src/app/model/post';
import User from 'src/app/model/user';
import { PostService } from 'src/app/service/post/post.service';
import { UserService } from 'src/app/service/user/user.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  user!: User;
  posts: { content: string }[] = [];

  createPostForm: FormGroup;

  constructor(private userService: UserService, private postService: PostService, private formBuilder: FormBuilder) {
    this.createPostForm = this.formBuilder.group({
      content: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.userService.whoAmI().subscribe(data => this.user = data);
  }

  onSubmitAdd() {
    const content = this.createPostForm.get('content')?.value;
    this.postService.createPost(content).subscribe({
      next(value) {
        console.log(value);

        
      },
      error(err){
        console.log(err);
        
      }
    });
    this.posts.unshift({ content });
    this.createPostForm.reset();
  }
  
}


