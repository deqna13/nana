//http-to create web server for http messaging
//fs-reading the html file using File IO
var http = require('http');
var fs = require('fs');
var path = require('path');
var express = require('express');
var app = express();

var dir = path.join(__dirname, 'dist');
var mime = {
    html: 'text/html',
    txt: 'text/plain',
    css: 'text/css',
    gif: 'image/gif',
    jpg: 'image/jpeg',
    png: 'image/png',
    svg: 'image/svg+xml',
    js: 'application/javascript'
};

app.use(express.static(dir));
app.get('*', function (req, res) {
    var file = path.join(dir, req.path.replace(/\/$/, '/index.html'));
    if (file.indexOf(dir + path.sep) !== 0) {
        return res.status(403).end('Forbidden');
    }
    var type = mime[path.extname(file).slice(1)] || 'text/plain';
    var s = fs.createReadStream(file);
    s.on('open', function () {
        //res.set('Content-Type', 'text/html');
        res.set('Content-Type', type);
        s.pipe(res);
    });
    s.on('error', function () {
        res.set('Content-Type', 'text/plain');
        res.status(404).end('Not found');
    });
});
app.listen(3000, function () {
    console.log('Listening on http://localhost:3000/');
});
//Read synchronously, so after the completion read operation, 
//the request processing can be started
//var MyPage = fs.readFileSync('MyPage.html');
 
//Create an http server for request processing.
/*var server = http.createServer(function (req, resp) {
    if (req.method === "GET") {
        resp.writeHead(200, { 'content-type': 'text/html' });
        resp.end(MyPage);
    }

});*/
//server.listen(5050);
//console.log('Server started on  5050');