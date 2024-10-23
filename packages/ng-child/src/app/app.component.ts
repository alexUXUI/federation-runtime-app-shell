import 'zone.js';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app.config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ng-child';

  loadRemote() {
    // loadRemote('ngChild/Component').then((ngChild) => {
    //   console.log('ngChild');
    //   console.log(ngChild);
    // });
  }
}

export const bootstrap = (element: HTMLElement) => {
  console.log('bootstrap!!');
  console.log('element', element);
  return bootstrapApplication(AppComponent, appConfig).catch((err) =>
    console.error(err),
  );
};

export const Run = bootstrap;
