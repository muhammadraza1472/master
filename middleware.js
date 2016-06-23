//var middleware = require(?)
var middleware = {
	requireAuthentication: function(req , res ,next){
		console.log('private route hit!');
		next();

	},
	logger:function(req,res,next){
		console.log('request: ' + new Date().tostring() + ' ' + req.method + ' ' + req.original);
		next();
	}
};

module.exports = middleware;