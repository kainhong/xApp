define(['app/services/core.service'], function () {
    var app = angular.module('app', ['services', 'ui.bootstrap']);

    app.provider({
        $exceptionHandler: function () {
            var handler = function (exception, cause) {
                console.log(exception);
            };

            this.$get = function () {
                return handler;
            };
        }
    });

    app.value('config', {
       
    });

    (function (core, coreFactory) {
        var pattern = /\.[^.]*?[Controller|Ctrl]$/i;
        var constructors = {};
        function factory(name, controllerFactory) {
            if (!pattern.test(name)) {
                return (coreFactory.apply(core, arguments));
            }

            core.controller(name,
                function ($scope, $injector) {
                    var cacheKey = ("cache_" + name);
                    var Constructor = constructors[cacheKey];

                    if (!Constructor) {
                        Constructor = constructors[cacheKey] = $injector.invoke(controllerFactory)
                    }

                    return $injector.instantiate(Constructor, { "$scope": $scope });
                }
            );
            return (core);
        };
        core.factory = factory;

    })(app, app.factory);


    app.factory(
        "BaseController",
        function () {
            function BaseController($scope, $location, $window) {

                this.init = function () {
                    //var moduleId = $window.location.search;//.moduleId;
                    //console.log(moduleId);
                    this.load();
                };

                BaseController.prototype = {
                    init: this.init
                };

                return (this);
            }
            return (BaseController);
        }
    );

    return app;
});