import { Component, Input } from '@angular/core';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/service/post/post.service';
import { PostComponent } from '../../post/post.component';

@Component({
  selector: 'app-update-btn',
  templateUrl: './update-btn.component.html',
  styleUrls: ['./update-btn.component.css']
})
export class UpdateBtnComponent {
  @Input() post!: Post;
  constructor(private postService: PostService,private postComponent: PostComponent) {}

  update(): void{
    this.postComponent.isEditing = true;
  }
}
