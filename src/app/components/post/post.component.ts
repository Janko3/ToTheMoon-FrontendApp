import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  newPost!: Post;
  updatePostForm!: FormGroup;
  
  constructor(private postService: PostService,private userService: UserService, private formBuilder: FormBuilder){
    this.updatePostForm = this.formBuilder.group({
      content: ['', Validators.required]
    })
  }

  ngOnInit() {
    console.log('sss');
    this.updatePostForm = this.formBuilder.group({
      content: [this.post.content]
    });
    this.userService.whoAmI().subscribe(data => this.loggedUser = data);
    this.isEditing = false;
    this.newPost = {...this.post};
  }

  saveUpdate(){
    const text = this.updatePostForm.get('content')?.value;
    this.postService.updatePost({...this.post, content: text}).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
        
      }
    });
    this.isEditing = false;
    window.location.reload();

  }
  changeEditingState(){
    this.isEditing =!this.isEditing;
  }
}
