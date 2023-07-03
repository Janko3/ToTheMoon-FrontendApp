import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reaction } from 'src/app/model/reaction';

@Injectable({
  providedIn: 'root'
})
export class ReactionService {

  private apiUrl = 'http://localhost:8080/api/reactions'
  constructor(private http: HttpClient) { }

  createReaction(reactionType:String, postId?: number | null, commentId?: number | null): Observable<Reaction> {
    return this.http.post<Reaction>(this.apiUrl, {reactionType,postId,commentId});
  }
  deleteReaction(id:number | undefined):Observable<Reaction>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Reaction>(url);
  }
  updateReaction(newReaction: Reaction){
    const url = `${this.apiUrl}/${newReaction.id}`;
    return this.http.put<Reaction>(url,{...newReaction});
  }
  findAllByPost(postId: number): Observable<Reaction[]>{
    const url = `${this.apiUrl}/posts/${postId}`;
    return this.http.get<Reaction[]>(url);
  }
  findAllByComment(commentId: number): Observable<Reaction[]>{
    const url = `${this.apiUrl}/comments/${commentId}`;
    return this.http.get<Reaction[]>(url);
  }
}
