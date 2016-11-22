var express = require('Express');
var app = express();
var http = require('http');
var path = require('path');
var fs = require('fs');

app.get('/', function(req, res){
	res.send('Hello World!');
});

app.use( function(req, res, next){
	if( req.query.token == 'abcd'){
		return next();
	}
	else{
		res.end('Your session is invalid');
	}
})

app.listen(3000,function(){
	console.log('Example app listeninon port 3000');
});

app.get('/action', function(req, res){
	//res.send('welcome to MEAN!');
	var filename = path.join (process.cwd(), "file.txt"); //req.url);
	
	
		fs.readFile(filename, function(err, data){  //not good as it take the whole file, so if the file size is very large, then it would take soime time 
		if(err){
		readStream.pipe(res);
		
		readStream.on('error', function(){
		
		res.writeHead(404,{"Content-Type" : "text/plain"});
			res.write("Not found ");
			res.end();
		});
		}
		else {
			res.writeHead(200, {"Content-Type" : "text/plain"});
			res.write(data);
			res.end();
		}
});
});