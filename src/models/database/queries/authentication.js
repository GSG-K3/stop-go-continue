const connection = require("../db_connection");

const authentication = (reqbody, callback) => {
  const { email } = reqbody;

  sql = {
    text: "select * from user_info where email = $1;",
    values: [email]
  };

  connection.query(sql.text, sql.values, (err, res) => {
    if (err) throw err;
    else {
      callback(err, res.rows);
    }
  });
};

module.exports = authentication;
