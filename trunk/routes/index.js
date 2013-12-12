
/*
 * GET home page.
 */

//exports.index = function(req, res){
//  res.render('index', { title: 'Express' });
//};

(function(exports){
    var index = function(req,res){
        res.render('index',{title:'express'});
    };

    exports.index = index;
})(exports);