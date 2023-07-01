import { Component, Input } from '@angular/core';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/service/post/post.service';

@Component({
  selector: 'app-delete-btn',
  templateUrl: './delete-btn.component.html',
  styleUrls: ['./delete-btn.component.css']
})
export class DeleteBtnComponent {
    
  @Input() postId!: number;

  constructor(private postService: PostService) {}

  delete(): void {
    if (this.postId) {
      this.postService.deletePost(this.postId).subscribe(
        (deletedPost: Post) => {
          
          window.location.reload(); 
        },
        (error) => {
        
        }
      );
    }
  }
}
