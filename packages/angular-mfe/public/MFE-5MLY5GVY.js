import {
  AppComponent,
  appConfig,
  bootstrapApplication
} from "http://localhost:4200/chunk-MFFCKWBJ.js";
import "http://localhost:4200/chunk-KSKXHS6V.js";

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
