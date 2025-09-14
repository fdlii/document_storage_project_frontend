import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { inject } from '@angular/core';
import { UserLoginRequest } from '../models/userLoginRequest.interface';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  http: HttpClient;
  baseURL: string = 'https://localhost:7116';
  isAuthenticated = signal(false);
  cookieService = inject(CookieService);

  constructor(){
    this.http = inject(HttpClient);
  }

  Login(user: UserLoginRequest) : Observable<string> {
    return this.http.post<string>(`${this.baseURL}/login`, user, { withCredentials: true })
    .pipe(
      tap(
        response => {
          this.isAuthenticated.set(true);
        }
      ),
      catchError(
        error => {
          this.isAuthenticated.set(false);
          return throwError(() => error);
        }
      )
    );
  }

  public checkAuthStatus(): boolean {
    const cookie = this.cookieService.get("req-option");
    console.log('Cookie found:', cookie);
    console.log('All cookies:', this.cookieService.getAll());
    if (cookie) {
      this.isAuthenticated.set(true);
      return true;
    } else {
      this.isAuthenticated.set(false);
      return false;
    }
  }
}