var myApp = angular.module("myApp");
myApp.controller("userCtrl", [
  "$scope",
  "$http",
  "$stateParams",
  "$rootScope",
  function($scope, $http, $stateParams, $rootScope) {
    $scope.userDoc = "welcomeUser";
    $scope.user = $stateParams.user;
    $scope.msg = "";
    $scope.user = $rootScope.loginData.user;
    $http({
      method: "GET",
      url: prefixUrl + "aadhar/" + $scope.user._id
    }).then(
      function(data) {
        if (data.data.aadhar != undefined && data.data.aadhar.length != 0) {
          $scope.aadhar = data.data.aadhar[0];
          $scope.aadhar.dob = new Date($scope.aadhar.dob);
          $scope.aadharFound = data.data.found;
        }
      },
      function(err) {
        console.log(err);
      }
    );
    $scope.saveDoc = function(op, index) {
      if (op == 0) {
        if (index == 1) {
          $scope.aadhar.userId = $scope.user._id;
          $http({
            method: "POST",
            url: prefixUrl + "aadhar",
            data: $scope.aadhar
          }).then(
            function(data) {
              $scope.msgErr = false;
              $scope.msg = "document saved successfully!";
              console.log(data);
            },
            function(err) {
              $scope.msgErr = true;
              $scope.msg = "something went wrong!";
              console.log(err);
            }
          );
        }
      } else if (op == 1) {
        if (index == 1) {
          $scope.aadhar.userId = $scope.user._id;
          $http({
            method: "PUT",
            url: prefixUrl + "aadhar",
            data: $scope.aadhar
          }).then(
            function(data) {
              $scope.msgErr = false;
              $scope.msg = "document saved successfully!";
              console.log(data);
            },
            function(err) {
              $scope.msgErr = true;
              $scope.msg = "something went wrong!";
              console.log(err);
            }
          );
        }
      }
    };
  }
]);
