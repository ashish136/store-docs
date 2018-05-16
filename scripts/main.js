var app = angular.module("myApp", ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
    .state("home", {
      url: "/home",
      templateUrl: "HTML/home.html"
    })

    // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
    .state("welcomeUser", {
      url: "/welcomeUser",
      templateUrl: "HTML/welcomeUser.html"
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
