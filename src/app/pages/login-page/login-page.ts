import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { inject } from '@angular/core';
import { LoginService } from '../../shared/services/login-service';
import { User } from '../../shared/models/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss'
})
export class LoginPage {
  
  loginService: LoginService;
  form: FormGroup;
  router: Router;

  constructor() {
    this.router = inject(Router);
    this.loginService = inject(LoginService);
    this.form = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password
    };
    this.loginService.Login(user).subscribe({
      next: (response) => {
        this.router.navigate(['main']);
      },

      error: (error) => {
        console.log(error);
      }
    });
  }
}
