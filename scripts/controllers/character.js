"use strict";

angular.module('characterCreation')
.controller('characterCtrl', function($scope, dataService) {
    $scope.character = {
        "name": "Character Name",
        "race": "Human",
        "points": 0
    };
    dataService.getStats(function(response) {
        $scope.character.stats = response.data;
    });
    dataService.getRaces(function(response) {
        $scope.races = response.data;
    });
    dataService.getClasses(function(response) {
        $scope.classes = response.data;
    });
});
