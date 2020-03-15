var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/first-msg',{
        templateUrl:'msg1.htm',
        controller: 'message1'
    })
    .when('/second-msg',{
        templateUrl:'msg2.htm',
        controller: 'message2'
    })
    .when('/',{
        template: '<strong>Aceasta este pagina de start</strong>'
    })
    .otherwise({
        template: '<strong>No content available!</strong>'
    })
}]);

app.controller('message1',['$scope',function($scope){
    $scope.a = 10;
    $scope.b =20;
}]);

app.controller('message2',['$scope',function($scope){
    $scope.c = 100;
    $scope.d =200;
}]);