import { Component } from '@angular/core';
import { MainPageRef } from '../main-page-ref/main-page-ref';
import { MyFilesRef } from '../my-files-ref/my-files-ref';

@Component({
  selector: 'app-sidebar',
  imports: [MainPageRef, MyFilesRef],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {

}
