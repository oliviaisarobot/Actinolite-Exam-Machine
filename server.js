const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pgp = require('pg-promise')();
const ver = require('./validators')

app.use(express.static(__dirname + '/dist'));

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

app.use(forceSSL());

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist'));
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());

const config = {
  host: 'ec2-54-221-217-158.compute-1.amazonaws.com',
  port: 5432,
  database: 'd5tp8i95rn4dog',
  user: 'mkletnrqqxwlih',
  password: 'b8ab3c1c66e2bf5c01ec0822a94622c8660344999fde163b68e8e8aebec21e7f',
  ssl: true,
};

const db = pgp(config);

app.get('/user/login', function(req, res) {
  console.log('login request received');
  var users = db.query('SELECT * FROM users;', function(err, rows) {
    if (err) {
      console.log(err);
      console.log('login request failed');
    }
    if (ver.verify(req.body, rows)) {
      console.log(ver.statusSuccess);
      res.json(ver.statusSuccess);
    } else{
      console.log(ver.statusErr);
      res.json(ver.statusErr);
      }
  });
});

app.listen(process.env.PORT || 8080);
