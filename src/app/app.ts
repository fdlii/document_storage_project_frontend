import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainPageRef } from './common-ui/main-page-ref/main-page-ref';
import { MyFilesRef } from "./common-ui/my-files-ref/my-files-ref";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('DocumentStorageProject');
}
