import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateCommentDto } from 'src/app/model/createCommentDto';
import User from 'src/app/model/user';
import { CommentService } from 'src/app/service/comment/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  user!: User;
  commentForm: FormGroup;
 @Input() postId!: number;
 @Input() owner?: number;
  constructor( private formBuilder: FormBuilder,
    private commentService: CommentService){
      this.commentForm = this.formBuilder.group({
        text: ['', Validators.required]
      });
    }
    createComment(): void {
      if (this.commentForm.valid) {
        const commentData: CreateCommentDto = {
          text: this.commentForm.get('content')?.value
        };
        this.commentService
          .createComment(commentData, this.postId, this.owner)
          .subscribe(
            (comment: CreateCommentDto) => {
             
              console.log('New comment:', comment);
            },
            (error) => {
              console.error('Error creating comment:', error);
            }
          );
      }
    }
}
