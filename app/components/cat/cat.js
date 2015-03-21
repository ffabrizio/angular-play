"use strict";

angular.module("animals.cat", [])

.directive("cat", ["styleFactory", function(styleFactory){
    return {
        scope: { id: "@" },
        replace: true,
        restrict: "E",
        templateUrl: "components/cat/cat.html",
        compile:  function () {
            return {
                pre: function () {
                    styleFactory.get("cat", "components/cat/cat.css");
                }
            }
        },
        controller: "CatCtrl"
    }
}])

.controller("CatCtrl", ["$scope", "modelFactory", function($scope, modelFactory) {
    modelFactory.get("components/cat/cat.json")
        .success(function(data){
            $scope.model = data;
            console.log($scope.id, $scope.model)
        });
}]);