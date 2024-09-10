import type { Plugin } from 'esbuild';
const { moduleFederationPlugin } = require('@module-federation/esbuild/plugin');
const { withFederation, shareAll } = require('@module-federation/esbuild/build');
import { ApplicationBuilderOptions, DevServerBuilderOptions } from '@angular-devkit/build-angular';


const AngularMFE: Plugin = withFederation({
    name: 'angularMFE',
    exposes: {
        './App': './src/main.ts',
    },
    shared: {
        // ...shareAll({
        //     singleton: true,
        //     strictVersion: true,
        //     requiredVersion: 'auto',
        //     includeSecondaries: false,
        // }),
    },
});

export default moduleFederationPlugin(AngularMFE)