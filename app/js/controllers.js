'use strict';

/* Controllers */

angular.module('timWeb.controllers', []).
  controller('userDetails', ['$scope', function($scope) {
        $scope.userDetails = {
            currentPrincipal: 70000,
            yearlyContributions: 12000,
            age: 30,
            withdrawalRate: 0.05,
            taxRate: 0.25
        };

        $scope.toSixty = function(){
            return 60 - this.userDetails.age;
        };

        $scope.futureValue = function(interestRate, years){
            var interestReturn = Math.pow(1 + interestRate, years);
            var principalReturn = (this.userDetails.currentPrincipal * interestReturn);
            if (interestRate==0){
                return principalReturn + years * this.userDetails.yearlyContributions;
            }
            var annuityReturn = this.userDetails.yearlyContributions * ((interestReturn - 1)/interestRate);
            return principalReturn + annuityReturn;

        };

        $scope.yearlyDistribution = function(interestRate, years){
            return this.userDetails.withdrawalRate * this.futureValue(interestRate, years);
        };

        $scope.monthlyDistribution = function(interestRate, years){
            return this.yearlyDistribution(interestRate, years) / 12;
        };

        $scope.netMonthlyIncome = function(interestRate, years){
            return this.monthlyDistribution(interestRate, years) * (1 - this.userDetails.taxRate);
        };

        $scope.netYearlyIncome = function(interestRate, years){
            return this.yearlyDistribution(interestRate, years) * (1 - this.userDetails.taxRate);
        };

        $scope.numberWithCommas = function (x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        };

        $scope.interestRates = [];
        for (var j = 0; j < 15; j++){
            $scope.interestRates[j] = 0.01 * j - 0.02;
        }

  }])
  .controller('MyCtrl2', [function() {

  }]);
