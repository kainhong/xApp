/// <reference path="../nodelib/node.js" />

(function (exports) {
    var mysql = require('mysql');
    var Q = require('Q');
    var CONNECT_STRING = {
        host:"127.0.0.1",
        user: "root",
        database:'xapp',
        password: ""
    };

    function getConnection() {
        var conn = mysql.createConnection(CONNECT_STRING);
        return conn;
    };

    var list = function () {
        var conn = getConnection();
        var deferred = Q.defer()
        var result = conn.query('select * from user', function (err, result) {
            conn.end();
            if (err)
                deferred.reject(err) // rejects the promise with `er` as the reason
            else
                deferred.resolve(result)
        });

        return deferred.promise;
    }

    exports.list = list;

})(exports);


 