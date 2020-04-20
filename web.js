var http = require("http");
var url = require("url");
var prices = require("./items.js");
var port = process.env.PORT || 3000;

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.write("Gabriel McNinch<br>");
    response.write("Arlington MA<br>");
    var qobj = url.parse(request.url, true).query;
    var txt = qobj.item;
    
    response.write(txt+ " are $"+ prices.get_price(txt)+"<br>");
    response.end("Works");
}).listen(port);
