var myApp = angular.module("myApp");
myApp.controller("mainNavCtrl", [
  "$scope",
  "$http",
  "$stateParams",
  "$rootScope",
  "$state",
  function($scope, $http, $stateParams, $rootScope, $state) {
    $scope.logOut = function() {
      $rootScope.loginData = undefined;
      $state.go("home");
    };
  }
]);
