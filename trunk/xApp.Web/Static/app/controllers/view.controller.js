define(['controllers/base.controller'], function (app) {
    app.factory("app.Ctrl", function (BaseController, $location, $window) {

        function Ctrl($scope, $location, $window) {
            this.id = 1002;
            this.load = function () {
                console.log(this.id);
            }

            BaseController.call(this, $scope, $location, $window);

            this.init();
        }

        Ctrl.prototype = Object.create(BaseController.prototype);

        return (Ctrl);

    });
});