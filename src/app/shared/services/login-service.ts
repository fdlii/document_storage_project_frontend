import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { UserLoginRequest } from '../models/userLoginRequest.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  http: HttpClient;
  baseURL: string = 'https://localhost:7116';

  constructor(){
    this.http = inject(HttpClient);
  }

  Login(user: UserLoginRequest){
    return this.http.post<UserLoginRequest>(`${this.baseURL}/login`, user, { withCredentials: true });
  }
}