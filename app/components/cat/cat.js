"use strict";

angular.module("Cat", [])

.directive("cat", ["StyleFactory", function(StyleFactory){
    return {
        scope: { id: "@" },
        replace: true,
        restrict: "E",
        templateUrl: "components/cat/cat.html",
        compile:  function () {
            return {
                pre: function () {
                    StyleFactory.get("cat", "components/cat/cat.css");
                }
            }
        },
        controller: "CatCtrl"
    }
}])

.controller("CatCtrl", ["$scope", "ModelFactory", function($scope, ModelFactory) {
    ModelFactory.get("components/cat/cat.json")
        .success(function(data){
            $scope.model = data;
            console.log($scope.id, $scope.model)
        });
}]);