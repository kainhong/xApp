var services = angular.module("services", ['ngResource']);

services.config(function ($httpProvider) {
	$httpProvider.defaults.headers.post = { 'Content-Type': 'application/x-www-form-urlencoded' };
})


services.factory('Application', function ($resource, $http) {
    var service = $resource('/api/application', {

    }, {
        list: { method: "GET", params: {}, isArray: true }
    });
    return service;
});

services.factory('Menu', function ($resource, $http) {
    var service = $resource('/api/menu/:id', { id: "@id" }, {
        list: { method: "GET", params: { id: '@app' }, isArray: true }
    });
    return service;
});