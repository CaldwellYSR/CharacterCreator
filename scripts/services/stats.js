"use strict";

angular.module('characterCreation')
.service('dataService', function($http) {
    this.getStats = function(callback) {
        $http.get('mock/stats.json').then(callback);
    };
    this.getClasses = function(callback) {
        $http.get('mock/classes.json').then(callback);
    };
    this.getRaces = function(callback) {
        $http.get('mock/races.json').then(callback);
    };
});
