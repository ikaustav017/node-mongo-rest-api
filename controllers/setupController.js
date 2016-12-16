module.exports = function(server, restify, restifyValidator) {

	server.use(restify.acceptParser(server.acceptable));
	server.use(restify.bodyParser());
	server.use(restify.queryParser());
	server.use(restifyValidator);
	/*
	server.use(restify.authorizationParser());

	server.use(function(req,res,next){
		var whitelistIps = ['111.222.333.444'];
		var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
		if(whitelistIps.indexOf(ip) === -1){
			var response={
				'status' :'failure',
				'data' :  'You must be a valid ip'
			};			
			res.setHeader('content-type','application/json');
			res.writeHead(403);
			res.end(JSON.stringify(response));
			return next();	
		}

		return next();
	});

	
	server.use(function(req,res,next){
		var apiKeys ={
			'user1' : 'hgfhgfghgghf'
		};
		if(typeof(req.authorization.basic) === 'undefined' || !apiKeys[req.authorization.basic.username] || req.authorization.basic.password != apiKeys[req.authorization.basic.username])
		{
			var response={
				'status' :'failure',
				'data' :  'You must specify a valid api key'
			};
			res.setHeader('content-type','application/json');
			res.writeHead(403);
			res.end(JSON.stringify(response));
			return next();	
		}	
		return next();
	});

	server.use(restify.throttle({
		rate: 1,
		burst: 2, 
		xff: true
	}))
	
	*/
}