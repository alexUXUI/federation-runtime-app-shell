const esbuild = require('esbuild');
const path = require('path');
const { moduleFederationPlugin } = require('@module-federation/esbuild/plugin');
const { withFederation, shareAll } = require('@module-federation/esbuild/build');

async function buildApp() {
    const tsConfig = 'tsconfig.json';
    const outputPath = path.join('public');

    try {
        await esbuild.build({
            entryPoints: [path.join('src', 'main.ts')],
            outdir: outputPath,
            bundle: true,
            platform: 'browser',
            format: 'esm',
            mainFields: ['es2020', 'browser', 'module', 'main'],
            conditions: ['es2020', 'es2015', 'module'],
            resolveExtensions: ['.ts', '.tsx', '.mjs', '.js'],
            tsconfig: tsConfig,
            splitting: true,
            publicPath: 'http://localhost:4200/',
            plugins: [moduleFederationPlugin(
                withFederation({
                    name: 'angularApp',
                    filename: 'remoteEntry.js',
                    exposes: {
                        './MFE': './src/MFE.ts',
                    },
                    shared: {
                        ...shareAll({
                            singleton: true,
                            strictVersion: true,
                            requiredVersion: 'auto',
                            includeSecondaries: false,
                        }),
                    },
                })
            )],
        });
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

buildApp();

