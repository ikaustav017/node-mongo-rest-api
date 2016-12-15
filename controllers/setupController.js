module.exports = function (server, restify,restifyValidator){
	server.use(restify.acceptParser(server.acceptable));
	server.use(restify.queryParser());
	server.use(restify.bodyParser());
	//you dont have to parse the url ad extract individual parametrs yourself. happens behind the scenes
	//req.params knows what to have because of bodyparser
	server.use(restifyValidator);
}