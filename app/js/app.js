'use strict';


// Declare app level module which depends on filters, and services
angular.module('timWeb', [
  'ngRoute',
  'timWeb.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/voluntary_distribution', {templateUrl: 'partials/voluntary_distributions.html', controller: 'userDetails'});
  $routeProvider.when('/mandatory_distribution', {templateUrl: 'partials/mandatory_distributions.html', controller: 'userDetails'});
  $routeProvider.when('/yearly_distributions', {templateUrl: 'partials/yearly_distributions.html', controller: 'userDetails'});
  $routeProvider.otherwise({redirectTo: '/voluntary_distribution'});
}]);
