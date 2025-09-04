import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { RegisterService } from '../../shared/services/register-service';
import { inject } from '@angular/core';
import { UserRegisterRequest } from '../../shared/models/userRegisterRequest.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register-page',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register-page.html',
  styleUrl: './register-page.scss'
})
export class RegisterPage {
  registerService: RegisterService;
  form: FormGroup;
  constructor() {
    this.registerService = inject(RegisterService);
    this.form = new FormGroup(
      { 
        email: new FormControl('', Validators.required), 
        password: new FormControl('', Validators.required), 
        confirmPassword: new FormControl('', Validators.required) 
      }
    );
  }

  onSubmit() {
    const user: UserRegisterRequest = {
      email: this.form.value.email,
      password: this.form.value.password,
      confirmPassword: this.form.value.confirmPassword
    };
    this.registerService.Register(user).subscribe({
      next: (response) => {
        console.log("success");
      },
      error: (error) => {
        console.log("error");
      }
    });
  }
}
