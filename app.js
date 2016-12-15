function respond(res, next, status, data, http_code){
	var response = {
		'status':status,
		'data':data
	};
	res.setHeader('content-type','application/json');
	res.writeHead(http_code);
	res.end(JSON.stringify(response));
	return next();		//we are fully done wth this callback function..go to next part of the execution
}

function success(res, next, data){
	respond(res, next, 'success',data, 200);
}

function failure(res, next, data, http_code){
	respond(res, next, 'failure',data, http_code);
}

var restify = require('restify');
var server = restify.createServer();

var users = {};
var max_user_id = 0;

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());
//you dont have to parse the url ad extract individual parametrs yourself. happens behind the scenes
//req.params knows what to have because of bodyparser

//display all users
server.get("/",function(req,res,next){
	success(res,next,users);
});


//fectch a user
server.get("/user/:id",function(req,res,next){
	if(typeof(users[parseInt(req.params.id)])== 'undefined')
		failure (res,next, 'The specified user could not be found in database',404)
	success(res,next,users[parseInt(req.params.id)]);
});

//create new user
server.post("/user",function(req,res,next){
	var user = req.params;
	max_user_id++ ;
	user.id = max_user_id ;
	users[user.id] = user;
	success(res,next,user);

});

//update a user
server.put("/user/:id",function(req,res,next){

	if(typeof(users[parseInt(req.params.id)])== 'undefined')
		failure (res,next, 'The specified user could not be found in database',404)
	var user = users[parseInt(req.params.id)];
	var updates = req.params;

	for ( var field in updates){
		user[field] = updates[field];
	}

	res.setHeader('content-type','application/json');
	res.writeHead(200);
	res.end(JSON.stringify(user));
	return next();

});

//delete a user
server.del("/user/:id",function(req,res,next){

	if(typeof(users[parseInt(req.params.id)])== 'undefined')
		failure (res,next, 'The specified user could not be found in database',404)
	delete users[parseInt(req.params.id)];
	success(res,next,[]);
});


server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});