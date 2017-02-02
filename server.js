const express = require('express');
const app = express();
var pgp = require('pg-promise')();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var config = {
  host: 'ec2-54-221-217-158.compute-1.amazonaws.com',
  port: 5432,
  database: 'd5tp8i95rn4dog',
  user: 'mkletnrqqxwlih',
  password: 'b8ab3c1c66e2bf5c01ec0822a94622c8660344999fde163b68e8e8aebec21e7f',
  ssl: true,
};

var db = pgp(config);

app.post('/user/login', function(req, res) {
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

app.listen(8080, function(){
  console.log("server listening on port 8ö8ö")
});
