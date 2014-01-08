define(['app/directives/ui.component'], function (ui) {
	function initMenu(element) {

		$('.submenu > a').click(function (e) {
			e.preventDefault();
			var submenu = $(this).siblings('ul');
			var li = $(this).parents('li');
			var submenus = $('#sidebar li.submenu ul');
			var submenus_parents = $('#sidebar li.submenu');
			if (li.hasClass('open')) {
				if (($(window).width() > 768) || ($(window).width() < 479)) {
					submenu.slideUp();
				} else {
					submenu.fadeOut(250);
				}
				li.removeClass('open');
			} else {
				if (($(window).width() > 768) || ($(window).width() < 479)) {
					submenus.slideUp();
					submenu.slideDown();
				} else {
					submenus.fadeOut(250);
					submenu.fadeIn(250);
				}
				submenus_parents.removeClass('open');
				li.addClass('open');
			}
		});

		var ul = $('#sidebar > ul');

		$('#sidebar > a').click(function (e) {
			e.preventDefault();
			var sidebar = $('#sidebar');
			if (sidebar.hasClass('open')) {
				sidebar.removeClass('open');
				ul.slideUp(250);
			} else {
				sidebar.addClass('open');
				ul.slideDown(250);
			}
		});

		// === Fixes the position of buttons group in content header and top user navigation === //

 
	};

	ui.directive('accordion', function ($parse) {
		return {
			restrict: "AE",
			replace: false,
			templateUrl: '/static/app/template/accordion.html',
            scope:true,
            controller: function ($scope, $element) {
                var self = this;
			    $scope.click = function (menu) {
			      self.click($scope, { item: menu });
			    }
			},
			link: function (scope, element, attrs,ctrl) {
			    var inited = false;
			    ctrl.click = $parse(attrs.onClick);
			    scope.$watch('menus', function (n, o) {
			        if (n && !inited) {
			            initMenu(element);
			            inited = true;
			        }
			    });
				//initMenu(element);
			}
		}
	});
});