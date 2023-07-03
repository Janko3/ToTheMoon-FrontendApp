import { Component } from '@angular/core';
import User from 'src/app/model/user';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  user!: User;
  constructor(){}
}
