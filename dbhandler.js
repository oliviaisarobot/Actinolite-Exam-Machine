module.exports = {
  getUser: function(req, res) {
        var pg = require('pg');
        var conString = process.env.DATABASE_URL_COBALT || "postgres://mkletnrqqxwlih:b8ab3c1c66e2bf5c01ec0822a94622c8660344999fde163b68e8e8aebec21e7f@ec2-54-221-217-158.compute-1.amazonaws.com:5432/d5tp8i95rn4dog";
        var client = new pg.Client(conString);
        client.connect();
        var query = client.query("SELECT * FROM user");
        var ver = require('./validators.js');
        // var bodyParser = require('body-parser');
        query.on("row", function (row, result) {
          if (err) {
            console.log(err);
            console.log('login request failed');
          }
          if (ver.verify(req.query, rows)) {
            console.log(ver.statusSuccess);
            res.json(ver.statusSuccess);
          } else {
            console.log(ver.statusErr);
            res.json(ver.statusErr);
          }
        });
        query.on("end", function (result) {
            client.end();
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write(JSON.stringify(result.rows, null, "    ") + "\n");
            res.end();
        });
  },

  addUser : function(req, res) {
      var pg = require('pg');
      var conString = process.env.DATABASE_URL_COBALT ||  "postgres://mkletnrqqxwlih:b8ab3c1c66e2bf5c01ec0822a94622c8660344999fde163b68e8e8aebec21e7f@ec2-54-221-217-158.compute-1.amazonaws.com:5432/d5tp8i95rn4dog";
      var client = new pg.Client(conString);
      client.connect();
      var query = client.query("INSERT INTO users (user_name, user_email, user_password) "+
                              "VALUES ('"+req.query.name+"','"+req.query.email+"','"+
                                  req.query.password+"')");
      query.on("end", function (result) {
          client.end();
          res.write('Success');
          res.end();
      });
  },

  addExam : function(req, res) {
    // some function here
  },

    //  delRecord : function(req, res){
    //     var pg = require('pg');
    //     var conString = process.env.DATABASE_URL ||  "postgres://postgres:Welcome123@localhost:5432/postgres";
    //     var client = new pg.Client(conString);
    //     client.connect();
    //     var query = client.query( "Delete from employee Where id ="+req.query.id);
    //     query.on("end", function (result) {
    //         client.end();
    //         res.write('Success');
    //         res.end();
    //     });
    // },
    // createTable : function(req, res){
    //     var pg = require('pg');
    //     var conString = process.env.DATABASE_URL ||  "postgres://postgres:Welcome123@localhost:5432/postgres";
    //     var client = new pg.Client(conString);
    //     client.connect();
    //     var query = client.query( "CREATE TABLE employee"+
    //                                 "("+
    //                                   "firstname character varying(50),"+
    //                                   "lastname character varying(20),"+
    //                                   "email character varying(30),"+
    //                                   "mobile character varying(12),"+
    //                                   "id serial NOT NULL"+
    //                                 ")");
    //     query.on("end", function (result) {
    //         client.end();
    //         res.write('Table Schema Created');
    //         res.end();
    //     });
    // },
    // dropTable : function(req, res){
    //     var pg = require('pg');
    //     var conString = process.env.DATABASE_URL || "postgres://postgres:Welcome123@localhost:5432/postgres";
    //     var client = new pg.Client(conString);
    //     client.connect();
    //     var query = client.query( "Drop TABLE employee");
    //     query.on("end", function (result) {
    //         client.end();
    //         res.write('Table Schema Deleted');
    //         res.end();
    //     });
    // }
};
