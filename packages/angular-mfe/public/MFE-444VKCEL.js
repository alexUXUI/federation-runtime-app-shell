import {
  AppComponent,
  appConfig,
  bootstrapApplication
} from "/chunk-2EGZDOOV.js";
import "/chunk-R4QFT7I2.js";

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
