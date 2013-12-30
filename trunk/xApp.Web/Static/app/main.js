require.config({
    baseUrl: '/static',
    urlArgs: 'v=1.0'
});

require(
    [
        'app/services/core.service',
        'app/controllers/index.controller'
    ],
    function () {
        angular.bootstrap(document, ['app']);
    });
