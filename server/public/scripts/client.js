var colorBlocks = angular.module('colorBlocks', ['ngRoute']);

colorBlocks.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/play', {
            templateUrl: '/views/templates/gameview.html',
            controller: 'GameController',
            controllerAs: 'game'
        })

        .when('/config', {
            templateUrl: '/views/templates/configview.html',
            controller: 'SettingsController',
            controllerAs: 'settings'
        })
        .otherwise({
            redirectTo: '/play'
        });
}]);


// NOTE: from client.js from phi-weekend4-angular-conversion
// var myApp = angular.module('TaskApp', ['ngRoute']);
// myApp.config(['$routeProvider', function($routeProvider) {
//   $routeProvider
//     .when('/home', {
//       templateUrl: '/views/home.html',
//       controller: 'HomeController',
//       controllerAs: 'hc'
//     })
//     .when('/todoList', {
//       templateUrl: '/views/todoList.html',
//       controller: 'TaskController',
//       controllerAs: 'tc'
//     })
//     .when('/about', {
//       templateUrl: '/views/about.html',
//       controller: 'AboutController',
//       controllerAs: 'ac'
//     })
//     .otherwise({
//       redirectTo: 'home'
//     })
// }]);
