// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: 'https://tools.texoit.com/backend-java/api/movies'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 * https://tools.texoit.com/backend-java/api/movies?projection=years-with-multiple-winners
 * https://tools.texoit.com/backend-java/api/movies?projection=studios-with-win-count
 * https://tools.texoit.com/backend-java/api/movies?projection=max-min-win-interval-for-producers
 * https://tools.texoit.com/backend-java/api/movies?winner=true&year=2018
 * https://tools.texoit.com/backend-java/api/movies?page=9&size=99&winner=true&year=2018
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

