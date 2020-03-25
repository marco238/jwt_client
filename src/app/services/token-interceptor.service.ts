import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private _authService: AuthService) { }

  intercept(req, next) {
    let tokenizedRequest = req.clone({
      setHeaders: {
        Autorization: `Bearer ${this._authService.getToken()}`
      }
    });
    return next.handle(tokenizedRequest);
  }
}
