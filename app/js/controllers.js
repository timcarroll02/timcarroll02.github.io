'use strict';

/* Controllers */

angular.module('timWeb.controllers', []).
  controller('userDetails', ['$scope', function($scope) {
        $scope.userDetails = {
            current_principal: 70000,
            yearly_contributions: 12000,
            birthday: new Date('1985-11-19'),
            withdrawal_rate: 0.05,
            tax_rate: 0.25
        };

        $scope.numberWithCommas = function(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

        $scope.interest = function(years){return this.userDetails.current_principal * years;};

  }])
  .controller('MyCtrl2', [function() {

  }]);
