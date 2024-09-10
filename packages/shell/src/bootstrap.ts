// Federation Runtime
import { init, loadRemote } from '@module-federation/enhanced/runtime'

// @ts-expect-error
// import { MFE as yo } from 'angularApp/MFE'
// Use the Types of the Remote MFEs in @mf-types
import type { MFE } from '../@mf-types/reactApp/compiled-types/MFE'

// console.log(yo);

// Declare Remote MFEs
const REMOTE_MFES = [
  { name: 'reactApp', entry: 'http://localhost:8001/mf-manifest.json' },
  { name: 'litApp', entry: 'http://localhost:8002/mf-manifest.json' },
  { name: 'angularApp', entry: 'http://localhost:4200/mf-manifest.json' },
]

const runtimePlugin: () => any = function () {
  return {
    name: 'my-runtime-plugin',
    beforeInit(args: any) {
      console.log('beforeInit: ', args);
      return args;
    },
    beforeRequest(args: any) {
      console.log('beforeRequest: ', args);
      return args;
    },
    // loadRemoteSnapshot(args: any) {
    //   console.log("loadRemoteSnapshot: ", args);
    // if (args.manifestJson && (args.manifestJson.metaData as any).publicPath.includes("placeholder")) {
    //   (args.manifestJson.metaData as any).publicPath = (args.manifestJson.metaData as any).publicPath.replace(
    //     "placeholder",
    //     args.manifestUrl?.split("/")[2].split(":")[0],
    //   );
    // }
    // if ((args.remoteSnapshot as any).publicPath.includes("placeholder")) {
    //   (args.remoteSnapshot as any).publicPath = (args.remoteSnapshot as any).publicPath.replace(
    //     "placeholder",
    //     args.manifestUrl?.split("/")[2].split(":")[0],
    //   );
    // }
    //   return args;
    //},
    afterResolve(args: any) {
      console.log('afterResolve', args);
      return args;
    },
    onLoad(args: any) {
      console.log('onLoad: ', args);
      return args;
    },
    async loadShare(args: any) {
      console.log('loadShare:', args);
      return args;
    },
    async beforeLoadShare(args: any) {
      console.log('beforeloadShare:', args);
      return args;
    },
    // async initContainer(args: any) {
    //   console.log("initContainer: ", args);
    //   args.origin.snapshotHandler.manifestCache.forEach((manifest, index) => {
    //     console.log(args);
    //     manifest.metaData.publicPath = manifest.metaData.publicPath.replace(
    //       "placeholder",
    //       args.remoteInfo.entry.split("/")[2].split(":")[0],
    //     );
    //     console.log("manifest: ", manifest);
    //   });
    //   console.log("args after", args);
    //   return args;
    // },
  };
};

// Create a new Federation Runtime Instance (Singleton)
init({
  name: 'shell',
  remotes: REMOTE_MFES,
  plugins: [runtimePlugin()],
});

(async () => {
  // Load Remote MFEs over HTTPS
  const reactMFE = await loadRemote<{ MFE: MFE }>('reactApp/MFE');
  const litMFE = await loadRemote<{ MFE: MFE }>('litApp/MFE');
  // const angularMFE = await loadRemote<{ MFE: MFE }>('angularApp/MFE');

  if (!reactMFE || !litMFE) return;

  const mfes: { MFE: MFE }[] = [reactMFE, litMFE];

  // Mount Remote MFEs
  mfes.forEach(({ MFE }) => {
    const rootElement = prepareRoot(MFE.name);
    MFE.bootstrap(rootElement, { message: 'Hello from Shell!' });
  });
})();

// Create a Root Element for the Remote MFE
function prepareRoot(id: string) {
  const root = document.getElementById(id);
  if (!root) {
    const rootElement = document.createElement('div');
    rootElement.id = id;
    document.body.appendChild(rootElement);
  }
  return document.getElementById(id)!;
}

document.querySelector('#root')!.innerHTML = `
<div class="content">
  <h1>App Shell 🐚</h1>
</div>
`;
