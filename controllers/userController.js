var helpers = require('../config/helperFunctions.js')

//Fake Database
var users = {};
var max_user_id = 0;

module.exports = function(server){



	//display all users
	server.get("/",function(req,res,next){
		helpers.success(res,next,users);
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
		helpers.success(res,next,user);

	});

	//update a user
	server.put("/user/:id",function(req,res,next){

		if(typeof(users[parseInt(req.params.id)])== 'undefined')
			helpers.failure (res,next, 'The specified user could not be found in database',404)
		var user = users[parseInt(req.params.id)];
		var updates = req.params;

		for ( var field in updates){
			user[field] = updates[field];
		}
		helpers.success(res,next,user);
		return next();

	});

	//delete a user
	server.del("/user/:id",function(req,res,next){

		if(typeof(users[parseInt(req.params.id)])== 'undefined')
			helpers.failure (res,next, 'The specified user could not be found in database',404)
		delete users[parseInt(req.params.id)];
		helpers.success(res,next,[]);
	});

}