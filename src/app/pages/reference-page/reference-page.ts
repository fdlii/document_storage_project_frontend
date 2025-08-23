import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reference-page',
  imports: [],
  templateUrl: './reference-page.html',
  styleUrl: './reference-page.scss'
})
export class ReferencePage {
  private router: Router;

  constructor(){
    this.router = inject(Router);
  }
  RedirectToLogin() {
    this.router.navigate(['login']);
  }
}
