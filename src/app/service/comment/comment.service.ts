import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateCommentDto } from 'src/app/model/createCommentDto';
import { CommentDTO } from 'src/app/model/commentDto';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiUrl = 'api/posts/{id}/comments';

  constructor(private http: HttpClient) { }

  createComment(commentData: CreateCommentDto, postId: number, owner?: number): Observable<CommentDTO> {
    const url = this.apiUrl.replace('{id}', postId.toString());
    const params = { owner: owner || '' };
    return this.http.post<CommentDTO>(url, commentData, { params });
  }

  getComment(id: number): Observable<CommentDTO> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<CommentDTO>(url);
  }

  getReplies(postId: string, owner: string): Observable<CommentDTO[]> {
    const url = `${this.apiUrl}/${postId}/${owner}`;
    return this.http.get<CommentDTO[]>(url);
  }

  getComments(postId: string): Observable<CommentDTO[]> {
    const url = `${this.apiUrl}?id=${postId}`;
    return this.http.get<CommentDTO[]>(url);
  }

  updateComment(commentData: CommentDTO): Observable<CommentDTO> {
    const url = `${this.apiUrl}/${commentData.id}`;
    return this.http.put<CommentDTO>(url, commentData);
  }

  deleteComment(id: number): Observable<CommentDTO> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<CommentDTO>(url);
  }
}

