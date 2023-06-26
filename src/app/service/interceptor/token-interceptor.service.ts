import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private inj: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authService:AuthService = this.inj.get(AuthService);
    req = req.clone({
      setHeaders:{
        'Authorization' : `JWT ${authService.getToken()}`
      }
    });
    return next.handle(req);
  }
}
