import {
  AppComponent,
  appConfig,
  bootstrapApplication
} from "/public/chunk-275U3RBV.js";
import "/public/chunk-O4JPK5AI.js";

// src/MFE.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
var MFE = {
  name: "angularMfe",
  element: document.createElement("reactRoot"),
  mount(anchor, data) {
    bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
  },
  bootstrap(anchor, data) {
    this.mount(anchor, data);
  },
  destroy() {
  }
};
export {
  MFE
};
