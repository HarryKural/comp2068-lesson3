/**
 * Created by Harshit Sharma on 25-Jan-2017.
 */
/**
 * Created by Harshit Sharma on 11-Jan-2017.
 */

// first node page to load in a browser

// reference the http library that ships with node
var http = require('http');

// start an http server asynchronously
http.createServer(function (request, response) {
    // send the response
    response.writeHead(200);
    response.write('<h1>Our second node page using "Nodemon"</h1>');
    response.end();
}).listen(3000);

//display a message to the console
console.log('Server running on port 3000');
