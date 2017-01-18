'use strict';

var bodyParser = require('body-parser');
var path = require('path');
var express = require('express');
var mysql = require('mysql');

var index = require('./routes/index')
var app = express();


app.set('view', path.join(__dirname, 'view'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, '../exam-machine/src')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);

// app.post('/signup', function(res, req) {
//   con.query('')
// });



//var port = process.env.PORT || 5000;
app.listen(5000, function() {
  console.log('server started on port 5000');
});
