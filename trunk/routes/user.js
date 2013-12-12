
/*
 * GET users listing.
 */
var userRepository = require('../repository/userRepository');

exports.list = function(req, res){
    //res.send("respond with a resource");
    var q = userRepository.list();
    q.then(function (rows) {
        var row = rows[0];
        if (!row) {
            res.type('text/plain');
            res.send("title is not exist");
        } else {
            res.type('text/html');
            var bodystring = '<html><body><div><H1> SHOW Information</H1><p>' +
                                'Account:' + row['Account'] + '</p><p>' +
                                'FirstName:' + row['FirstName'] + '</p><p>' +
                                'LastName:' + row['LastName'] + '</p></div></body></html>';
            res.send(bodystring);
        }
    });
    //result.on('result', function (row) {
    //    if (!row) {
    //        res.type('text/plain');
    //        res.send("title is not exist");
    //    } else {
    //        res.type('text/html');
    //        var bodystring = '<html><body><div><H1> SHOW Information</H1><p>' +
    //                         'Account:' + row['Account'] + '</p><p>' +
    //                         'FirstName:' + row['FirstName'] + '</p><p>' +
    //                         'LastName:' + row['LastName'] + '</p></div></body></html>';
    //        res.send(bodystring);
    //    }

    //    //conn.resume();
    //});
};