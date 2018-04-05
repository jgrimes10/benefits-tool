// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAPAH4vOj5VrX5EUld4Kk4HUqGsLu9vyow',
    authDomain: 'benefits-tool.firebaseapp.com',
    databaseURL: 'https://benefits-tool.firebaseio.com',
    projectId: 'benefits-tool',
    storageBucket: 'benefits-tool.appspot.com',
    messagingSenderId: '206660767572'
  }
};
