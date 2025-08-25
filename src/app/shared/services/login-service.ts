import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  http: HttpClient;
  baseURL: string = 'https://localhost:7116';

  constructor(){
    this.http = inject(HttpClient);
  }

  Login(user: User){
    return this.http.post<User>(`${this.baseURL}/login`, user, { withCredentials: true });
  }
}