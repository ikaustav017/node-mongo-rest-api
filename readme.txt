browser-sync start --server --directory --files "**/*"

https://www.youtube.com/watch?v=4Q3553-LThQ&list=PLpKrEV7fcP00Ydvc4R5FrIB6tmRW2Vw2-&index=3&shuffle=11895

https://www.youtube.com/watch?v=xkCy5gKLWpo&index=18&list=PLpKrEV7fcP00Ydvc4R5FrIB6tmRW2Vw2-&shuffle=11895


git help
https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/

npm init
npm install restify --save

restify.com/

barebone implementation

var restify = require('restify');

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

var server = restify.createServer();
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});

save it as app.js (or by default index.js)

node app.js

http://localhost:8080/hello/jim


automatically restart server when you change any file
>npm install -g nodemon

nodemon -v

dev tool postman for chrome
https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop/related?hl=en

restify cheatsheet
https://gist.github.com/LeCoupa/0664e885fd74152d1f90