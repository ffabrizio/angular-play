"use strict";

angular.module("Dog", [])

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