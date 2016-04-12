"use strict";

angular.module('characterCreation')
.controller('characterCtrl', function($scope) {
    $scope.character = {
        name: 'Character Name',
        race: 'human',
        stats: [
            { 
                name: 'strength', 
                value: 0 
            },
            { 
                name: 'dexterity', 
                value: 0 
            },
            { 
                name: 'constitution', 
                value: 0 
            },
            { 
                name: 'intelligence', 
                value: 0 
            },
            { 
                name: 'wisdom', 
                value: 0 
            },
            { 
                name: 'charisma', 
                value: 0 
            }
        ]
    };
});
