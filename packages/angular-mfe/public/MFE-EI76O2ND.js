import {
  AppComponent,
  appConfig,
  bootstrapApplication
} from "./chunk-57B4ALPX.js";
import "./chunk-UXA4FHST.js";

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
