var myApp = angular.module("myApp");
myApp.controller("homeCtrl", [
  "$scope",
  "$http",
  "$state",
  "$rootScope",
  "$stateParams",
  function($scope, $http, $state, $rootScope, $stateParams) {
    $scope.user = {};
    $scope.login = {};
    $scope.userDoc == "welcomeUser";
    $scope.registerUser = function() {
      $http({
        method: "POST",
        url: prefixUrl + "registerUser",
        data: $scope.user
      }).then(
        function(data) {
          console.log(data);
        },
        function(err) {
          console.log(err);
        }
      );
    };
    $scope.loginFun = function() {
      if (
        $scope.login.userName == undefined ||
        $scope.login.userName == "" ||
        $scope.login.password == undefined ||
        $scope.login.password == ""
      )
        return false;
      $http({
        method: "POST",
        url: prefixUrl + "login",
        data: $scope.login
      }).then(
        function(response) {
          if (response.data.userStatus == "user found") {
            $("#loginModal").modal("hide");
            $rootScope.loginData = { login: true, user: response.data.data[0] };
            $state.go("welcomeUser", {
              userId: response.data.data[0]._id
            });
          } else {
          }
        },
        function(err) {
          console.log(err);
        }
      );
    };
  }
]);
