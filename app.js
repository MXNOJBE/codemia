
var app = angular.module('myApp', ['ngRoute']);
app.controller('FirstController', function($scope) {
    $scope.message = 'Hello from Main Controller';
    });
app.config(function($routeProvider) {
    $routeProvider
     
    .when('/', {
    templateUrl : 'profile2.html',
    controller : 'FirstController'
    })
     
    .when('/friendspage', {
    templateUrl : 'friendspage.html',
    controller : 'SecondController'
    })
     
    .when('/aboutpage', {
    templateUrl : 'aboutpage.html',
    controller : 'ThirdController'
    })

   .when('/photopage', {
        templateUrl: 'photopage.html',
         controller: 'ThirdController'
        })

     
 .otherwise({redirectTo: '/'});
    
    });

app.controller('FirstController', function($scope) {
        $scope.message = 'Hello from FirstController';
        });
         
app.controller('SecondController', function($scope) {
        $scope.message = 'Hello from SecondController';
        });
         
app.controller('ThirdController', function($scope) {
        $scope.message = 'Hello from ThirdController';
        });