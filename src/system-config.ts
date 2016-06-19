/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
     '@angular2-material': 'vendor/@angular2-material'
};

/** User packages configuration. */
const packages: any = {
};

const materialPkgs:string[] = [
  'core',
  'button',
  'card',
  'input',
  'icon',
  'checkbox'
];

materialPkgs.forEach((pkg) => {
  packages[`@angular2-material/${pkg}`] = {main: `${pkg}.js`};
});

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',
  
 

  // Thirdparty barrels.
  'rxjs',
  'jspdf',
  'cv-common',

  // App specific barrels.
  'app',
  'app/shared',
  'app/+cv/age',
  'app/+cv/mission',
  'app/components/skill',
  'app/+cv/section',
  'app/components/address',
  'app/+cv/subsection',
  'app/components/company',
  'app/+cv',
  'app/+company',
  'app/+sendmail',
  'app/components/selector',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js',
    'jspdf': 'vendor/jspdf.min.js',
    'cv-common': 'vendor/cv-common'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
