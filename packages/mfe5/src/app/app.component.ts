import 'zone.js';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app.config';
import { init, loadRemote } from '@module-federation/enhanced/runtime';

init({
  name: 'mfe5',
  remotes: [
    {
      name: 'ngChild',
      entry: 'http://localhost:4202/mf-manifest.json',
    },
    // uncomment these to see the other MFEs
    // {
    //   name: 'litApp',
    //   entry: 'http://localhost:8002/mf-manifest.json',
    // },
    // {
    //   name: 'reactApp',
    //   entry: 'http://localhost:8001/mf-manifest.json',
    // },
  ],
});

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  title = 'Angular MFE';

  constructor() {
    // uncomment just the line below this for infinite loop
    // this.loadNGRemote();
    // uncomment these to see the other MFEs
    // this.loadLitRemote();
    // this.loadReactRemote();
  }

  loadNGRemote() {
    loadRemote('ngChild/Component').then((ngChild) => {
      console.log('NG MFE');
      console.log(ngChild);
    });
  }

  // uncomment to try lit MFE
  // loadLitRemote() {
  //   loadRemote('litApp/MFE').then((litMFE) => {
  //     console.log('Lit MFE');
  //     console.log(litMFE);
  //   });
  // }

  // uncomment to try react MFE
  // loadReactRemote() {
  //   loadRemote('reactApp/MFE').then((reactMFE) => {
  //     console.log('React MFE');
  //     console.log(reactMFE);
  //   });
  // }
}

export const bootstrap = (element: HTMLElement) => {
  return bootstrapApplication(AppComponent, appConfig).catch((err) =>
    console.error(err),
  );
};

export const Run = bootstrap;
