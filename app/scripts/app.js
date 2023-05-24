'use strict';

/**
 * @ngdoc overview
 * @name frontendApp
 * @description
 * # frontendApp
 *
 * Main module of the application.
 */
angular
  .module('splain-app', [
    'ngSanitize',
    'LocalStorageModule',
    'ui.bootstrap',
    'ngJsonExplorer',
    'o19s.splainer-search'
  ])
  .config([
    '$locationProvider',
    function($locationProvider) {
      $locationProvider.hashPrefix('');
    }
  ]);

/* Override default config values for talking to Solr
 * JSONP->GET
 * */
angular.module('o19s.splainer-search')
  .value('defaultSolrConfig', {
    sanitize:     true,
    highlight:    true,
    debug:        true,
    numberOfRows: 10,
    escapeQuery:  true,
    apiMethod:    'GET'
  });
