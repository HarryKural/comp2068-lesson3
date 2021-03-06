/**
 * Created by Harshit Sharma on 25-Jan-2017.
 */
// link to the connect package we installed
let connect = require('connect');

// create a new instance of a connect application
let app = connect();

// hello function
let hello = function (req, res, next) {
    res.end('Hello');
};

// goodbye
let goodbye = function (req, res, next) {
    res.end('Goodbye');
};

// index (home)
let index = function (req, res, next) {
    res.end('Home / Index Page');
};

// route the urls the correct function
app.use('/hello', hello);
app.use('/goodbye', goodbye);
app.use('/', index);

// start the server on port 3000
app.listen(3000);
console.log('Connect running on port 3000');