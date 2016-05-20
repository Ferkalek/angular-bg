var listCoursesApi = angular.module("listCoursesApi", []);

listCoursesApi.controller("listCoursesCtrl", ['$scope', function ($scope) {
    $scope.list = arrColorList;
}]);