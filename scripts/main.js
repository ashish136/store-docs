var prefixUrl = "http://localhost:4000/api/";
var app = angular.module("myApp", ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
    .state("home", {
      url: "/home",
      templateUrl: "HTML/home.html",
      controller: "homeCtrl"
    })

    // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
    .state("welcomeUser", {
      url: "/welcomeUser/:userId",
      templateUrl: "HTML/welcomeUser.html",
      controller: "userCtrl"
      // resolve: {
      //   userData: [
      //     "$stateParams",
      //     "$http",
      //     function($stateParams, $http) {
      //       return $http({
      //         method: "POST",
      //         url: prefixUrl + "user",
      //         data: { _id: $stateParams.userId }
      //       }).then(
      //         function(data) {
      //           return data;
      //         },
      //         function(err) {
      //           return err;
      //         }
      //       );
      //     }
      //   ]
      // }
    })
    .state("welcomeUser.aadhar", {
      url: "/aadhar",
      templateUrl: "HTML/aadhar.html"
    })
    .state("welcomeUser.dl", {
      url: "/dl",
      templateUrl: "HTML/dl.html"
    });
  $urlRouterProvider.otherwise("/home");
  // $locationProvider.html5Mode(true);
});
