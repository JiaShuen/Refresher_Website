var mysql = require('mysql');

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Gr!@1470235689",
  database:"refresher"
});

function getAddresses(callback) {

  conn.query("SELECT * FROM customers", function (err, result) {
    if (err) {
      return callback(err, null)
    } 
    else {
      // console.log(result);
      return callback(null, result);
    }
  });

}

module.exports = {getAddresses}