define(['app/services/core.service',
    'app/directives/ui.component',
    'app/directives/ui.accordion'],
    function () {
        var app = angular.module('app', ['services', 'ui.bootstrap', 'ui.component']);

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
        function ($scope, Application, Menu) {
            
            $scope.tabs = [{ title: "Welcome", active: true, moduleId: -1 }, { title: "News", active: true, moduleId: -1 }];

            var query = Application.list().$promise;

            var then = query.then(function (data) {
                $scope.applications = data;
                if (data.length > 0)
                    getModules(data[0].code);
                //console.log(data);
            });

            function getModules(app) {
                Menu.list({ app: app }, function (data) {
                    $scope.menus = data;
                });
            }

            $scope.closeTab = function(tab){
                console.log(tab);
                var index = $scope.tabs.indexOf(tab);
                $scope.tabs.splice(index,1);
            };

            $scope.menuClick = function (menu) {
                console.log(menu);
                var exist = false;
                angular.forEach($scope.tabs, function (value, index) {
                    if (value.id == menu.id) {
                        value.active = true;
                        exist = true;
                    }
                    else {
                        value.active = false;
                    }
                });
                if (!exist) {
                    $scope.tabs.push({
                        id: menu.id,
                        title: menu.caption,
                        active: true,
                        moduleId: menu.moduleId
                    });
                }
            }
            
        }]);
    }
);