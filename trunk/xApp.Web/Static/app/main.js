require.config({
    baseUrl: '/static',
    urlArgs: 'v=1.0'
});

/*
$(window).resize(function () {
    if ($(window).width() > 479) {
        ul.css({ 'display': 'block' });
        $('#content-header .btn-group').css({ width: 'auto' });
    }
    if ($(window).width() < 479) {
        ul.css({ 'display': 'none' });
        fix_position();
    }
    if ($(window).width() > 768) {
        $('#user-nav > ul').css({ width: 'auto', margin: '0' });
        $('#content-header .btn-group').css({ width: 'auto' });
    }
});

if ($(window).width() < 468) {
    ul.css({ 'display': 'none' });
    fix_position();
}

if ($(window).width() > 479) {
    $('#content-header .btn-group').css({ width: 'auto' });
    ul.css({ 'display': 'block' });
}

// === Tooltips === //
$('.tip').tooltip();
$('.tip-left').tooltip({ placement: 'left' });
$('.tip-right').tooltip({ placement: 'right' });
$('.tip-top').tooltip({ placement: 'top' });
$('.tip-bottom').tooltip({ placement: 'bottom' });

// === Search input typeahead === //
$('#search input[type=text]').typeahead({
    source: ['Dashboard', 'Form elements', 'Common Elements', 'Validation', 'Wizard', 'Buttons', 'Icons', 'Interface elements', 'Support', 'Calendar', 'Gallery', 'Reports', 'Charts', 'Graphs', 'Widgets'],
    items: 4
});

function fix_position() {
    var uwidth = $('#user-nav > ul').width();
    $('#user-nav > ul').css({ width: uwidth, 'margin-left': '-' + uwidth / 2 + 'px' });

    var cwidth = $('#content-header .btn-group').width();
    $('#content-header .btn-group').css({ width: cwidth, 'margin-left': '-' + uwidth / 2 + 'px' });
}*/

require(
    [
        'app/controllers/index.controller',
        'app/services/core.service',
        'app/directives/ui.component',
        'app/directives/ui.accordion'
    ],
    function () {
        angular.bootstrap(document, ['app']);
    });
