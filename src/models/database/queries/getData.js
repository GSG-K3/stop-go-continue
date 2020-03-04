const connection = require("../db_connection");

const sql = "select * from stop_go_continue";
const getData = callback => {
  connection.query(sql, (err, res) => {
    if (err) throw err;
    else {
      callback(err, res.rows);
    }
  });
};

module.exports = getData;
