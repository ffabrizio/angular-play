"use strict";

angular.module("DogModule", [])

.directive("dog", [function(){
    return {
        scope: { id: "@" },
        replace: true,
        restrict: "E",
        templateUrl: "components/dog/dog.html",
        controller: "DogCtrl"
    };
}])

.controller("DogCtrl", [function() {

}]);