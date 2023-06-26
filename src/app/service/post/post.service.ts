import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/model/post';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:8080/api/posts';

  constructor(private http: HttpClient) {}

  createPost(content: String): Observable<Post> {
    return this.http.post<Post>(this.apiUrl, {content});
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

  getPostById(id: number): Observable<Post> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Post>(url);
  }

  updatePost(newPost: Post): Observable<Post> {
    const url = `${this.apiUrl}/${newPost.id}`;
    return this.http.put<Post>(url, newPost);
  }

  deletePost(id: number): Observable<Post> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Post>(url);
  }
}

