"use strict";

angular.module("animals.dog", [])

.directive("dog", [function(){
    return {
        scope: { id: "@" },
        replace: true,
        restrict: "E",
        templateUrl: "components/dog/dog.html",
        controller: "CatCtrl"
    };
}])

.controller("CatCtrl", [function() {

}]);