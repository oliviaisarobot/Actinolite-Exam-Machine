var express = require('express'),
    http = require('http'),
    request = require('request'),
    bodyParser = require('body-parser'),
    app = express();
var dbhandler = require("./dbhandler.js");
app.set('views', __dirname + '/views') ;
app.get('/' , function(req,res) {
    res.sendfile('views/index.html');
} );

app.use(forceSSL());

const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
       ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/user/login', function(req,res){
    dbhandler.getUser(req,res);
});

app.get('/db/addRecord', function(req,res){
    dbhandler.addUser(req,res);

app.set('port', process.env.PORT || 3001);

app.use(express.static(__dirname + '/dist/index.html'));

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
