"use strict";

angular.module('characterCreation')
.service('statsService', function($http) {
    this.getStats = function(callback) {
        $http.get('mock/stats.json').then(callback);
    };
});
