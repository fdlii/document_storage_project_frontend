import { Component, inject } from '@angular/core';
import { FilesNFoldersField } from "../../common-ui/files-n-folders-field/files-n-folders-field";
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fake-main-page',
  imports: [FilesNFoldersField, RouterLink],
  templateUrl: './fake-main-page.html',
  styleUrl: './fake-main-page.scss'
})
export class FakeMainPage {
  private router: Router;

  constructor(){
    this.router = inject(Router);
  }
  RedirectToLogin() {
    this.router.navigate(['login']);
  }
}
