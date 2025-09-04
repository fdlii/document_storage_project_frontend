import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserRegisterRequest } from '../models/userRegisterRequest.interface';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  http: HttpClient;
  baseURL: string = 'https://localhost:7116';

  constructor() {
    this.http = inject(HttpClient);
   }

   Register(user: UserRegisterRequest) {
    return this.http.post<UserRegisterRequest>(`${this.baseURL}/register`, user, {withCredentials: true} );
  }
}
