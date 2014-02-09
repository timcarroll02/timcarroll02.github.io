'use strict';


// Declare app level module which depends on filters, and services
angular.module('timWeb', [
  'ngRoute',
  'timWeb.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/index.html'});
  $routeProvider.when('/contact', {templateUrl: 'partials/contact.html'});
  $routeProvider.when('/distributions', {templateUrl: 'partials/distributions.html', controller: 'userDetails'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
