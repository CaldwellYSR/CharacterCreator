"use strict";

angular.module('characterCreation')
.controller('characterCtrl', function($scope, statsService) {
    $scope.character = {
        "name": "Character Name",
        "race": "Human"
    };
    statsService.getStats(function(response) {
        console.log(response.data);
        $scope.character.stats = response.data;
    });
});
