process.env.NODE_ENV = process.env.NODE_ENV || 'development';


var express = require('./config/express');
var app = express();

app.listen(3000);
console.log('Server runing at http://localhost:3000');

