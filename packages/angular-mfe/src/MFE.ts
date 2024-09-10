import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
    .catch((err) => console.error(err));

export const MFE = {
    name: 'angularMfe',
    element: document.createElement('reactRoot'),
    mount(anchor: Element, data: any) {
        bootstrapApplication(AppComponent, appConfig)
            .catch((err) => console.error(err));
    },
    bootstrap(anchor: Element, data: any) {
        this.mount(anchor, data);
    },
    destroy() {
        // todo
    },
}