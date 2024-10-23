import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { init, loadRemote } from '@module-federation/enhanced/runtime';

// init({
//   name: 'mfe5',
//   remotes: [
//     {
//       name: 'ngChild',
//       entry: 'http://localhost:4202/mf-manifest.json',
//     },
//   ],
// });

// loadRemote('ngChild/Component').then((ngChild) => {
//   console.log('ngChild');
//   console.log(ngChild);
// });

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err),
);

// if (ngChild) {
//   // Run Angular
//   const childRootElement = document.createElement('child-root');
//   document.body.appendChild(childRootElement);
//   ngChild.bootstrap();
// }
