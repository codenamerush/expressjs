var express = require('express');
var app = express();
var fs = require('fs');
var port = 8083;
app.get('/', function(req, res) {
	fs.readFile('hello.txt', function(err, data) {
		if (err) throw err;
		console.log('reading');
		res.send(data.toString());
	});
});

app.post('/', function(req, res) {
	res.send('Got a POST request');
});

app.put('/user', function(req, res) {
	res.send('Got a PUT request at /user');
});

app.delete('/user', function(req, res) {
	res.send('Got a DELETE request at /user');
});

app.listen(port, () => console.log(`Example app listening on ${port}!`));
