'use strict';

/* Controllers */

angular.module('timWeb.controllers', []).
  controller('userDetails', ['$scope', function($scope) {
        $scope.userDetails = {
            currentPrincipal: 100000,
            yearlyContributions: 12000,
            age: 40,
            startDistributions: 60,
            futureYears: 10,
            withdrawalRate: 0.05,
            taxRate: 0.25,
            effectiveInterestRate: 0.05,
            sixtyInterest: 0.05,
            distributionInterest: 0.03
        };

        $scope.toDistribution = function(){
            return this.userDetails.startDistributions - this.userDetails.age;
        };

        $scope.futureAge = function(){
            return this.userDetails.startDistributions + this.userDetails.futureYears;
        };

        $scope.futureMoney = function(){
            return this.futureValue(this.userDetails.effectiveInterestRate, this.toDistribution());
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

        $scope.withdrawal = function(principal, years, rate){
            if(years == 0){
                return principal;
            } else {
                return this.withdrawal(principal * (1 + rate) * (1 - this.userDetails.withdrawalRate), years - 1, rate);
            }
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

        $scope.moneyAtSixty = function(){
            return this.futureValue(this.userDetails.effectiveInterestRate, this.toDistribution());
        };

        $scope.interestRates = [];
        for (var j = 0; j < 6; j++){
            $scope.interestRates[j] = 0.02 * j - 0.02;
        }

        $scope.ages = [];
        for (j=0; j < 50; j++){
            $scope.ages[j] = j + 60;
        }

  }]).
controller('HeaderController', ['$scope', '$location', function($scope, $location) {
    $scope.isActive = function(viewLocation){
        return viewLocation === $location.path();
    };
}]);
