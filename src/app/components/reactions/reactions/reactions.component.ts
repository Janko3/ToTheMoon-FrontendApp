import { Component, Input } from '@angular/core';
import { Reaction } from 'src/app/model/reaction';
import User from 'src/app/model/user';
import { ReactionService } from 'src/app/service/reaction/reaction.service';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-reactions',
  templateUrl: './reactions.component.html',
  styleUrls: ['./reactions.component.css']
})
export class ReactionsComponent {
  @Input() postId!: number;
  @Input()commentId !: number;
  isLikeClicked: boolean = false;
  isDislikeClicked: boolean = false;
  isHeartClicked: boolean = false;
  reactions: Reaction[] = []
  user !: User
  reactionId: number | undefined

  constructor(private reactionService: ReactionService,private userService: UserService){}

  ngOnInit(){
    this.getReactions();
  }

  getReactions(){
    this.userService.whoAmI().subscribe(data =>{
      this.user = data;
     })
    if(this.postId){
      this.reactionService.findAllByPost(this.postId).subscribe(data => {
        console.log(this.user);
        
        this.reactions = data;
        this.reactions.forEach(reaction =>{
          console.log(reaction);
          
          if(reaction.user.id == this.user.id){
    
            if(reaction.reactionType == 'LIKE'){
              this.isLikeClicked = true;
            }
            if(reaction.reactionType == 'DISLIKE'){
              this.isDislikeClicked = true;
            }
            if(reaction.reactionType == 'HEART'){
              this.isHeartClicked == true;
            }
            this.reactionId = reaction.id;
          }
          
        })
      });
    }
    if(this.commentId){
      this.reactionService.findAllByComment(this.commentId).subscribe(data =>{
        this.reactions = data;
      })
    }
  }
  like(){
     if(this.isLikeClicked){
      console.log(this.reactionId);      
      this.reactionService.deleteReaction(this.reactionId).subscribe({next(value) {
        console.log(value);
        window.location.reload();
      },
    error(err) {
      console.log(err);
    },})
     }
     else{
      this.reactionService.createReaction("LIKE",this.postId,this.commentId).subscribe({
        next(value) {
          console.log(value);         
        },
        error(err) {
          console.log(err);         
        }
      });
      this.isLikeClicked = !this.isLikeClicked;
      window.location.reload();
     }
  }
  dislike(){
      if(this.isDislikeClicked){
      console.log(this.reactionId);
      
      this.reactionService.deleteReaction(this.reactionId).subscribe({next(value) {
        console.log(value);
        window.location.reload();
        
      },
    error(err) {
      console.log(err);
    },})
     }
     else{
      this.reactionService.createReaction("DISLIKE",this.postId,this.commentId).subscribe({
        next(value) {
          console.log(value);
          
        },
        error(err) {
          console.log(err);         
        }
      });
      this.isDislikeClicked = !this.isDislikeClicked;
      window.location.reload();
     }
  }
  heart(){
    if(this.isHeartClicked){
      console.log(this.reactionId);
      
      this.reactionService.deleteReaction(this.reactionId).subscribe({next(value) {
        console.log(value);
        window.location.reload();
        
      },
    error(err) {
      console.log(err);
    },})
     }
     else{
      this.reactionService.createReaction("HEART",this.postId,this.commentId).subscribe({
        next(value) {
          console.log(value);
          
        },
        error(err) {
          console.log(err);         
        }
      });
      this.isHeartClicked = !this.isHeartClicked;
      window.location.reload();
     }
    
}
}
