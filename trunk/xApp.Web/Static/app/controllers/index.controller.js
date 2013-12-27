var app = angular.module('app', ['services', 'ui.bootstrap']);
app.provider({
    $exceptionHandler: function () {
        var handler = function (exception, cause) {
            //debugger;
            //alert(exception);
        };

        this.$get = function () {
            return handler;
        };
    }
});

app.controller('ctrl', ['$scope', 'Application', 'Menu',
                        function ($scope, Application,Menu) {
    var query = Application.list().$promise;

    var then = query.then(function (data) {
        $scope.applications = data;
        if (data.length > 0)
            getModules(data[0].code);
        //console.log(data);
    });

    function getModules(app) {
        Menu.list({ app: app },function (data) {
            $scope.menus = data;
        });
    }
}]);