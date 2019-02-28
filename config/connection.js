// Set up MySQL connection.
var mysql = require("mysql");
var connection;
// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "ExcuseBarrel12",
//   database: "burgers_db"
// });

// Make connection.
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

if(process.env.JAWSBD_URL){
  connection = mysql.createConnection(process.env.JAWSBD_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "ExcuseBarrel12",
    database: "burgers_db"
  });
}

// Export connection for our ORM to use.
connection.connect();
module.exports = connection;
