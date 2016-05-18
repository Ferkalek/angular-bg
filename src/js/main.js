var listCoursesApi = angular.module("listCoursesApi", []);

listCoursesApi.controller("listCoursesCtrl", function ($scope) {
    $scope.list = arrColorList;
});