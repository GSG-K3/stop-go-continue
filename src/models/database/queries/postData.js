const connection = require("../db_connection");
const bcrypt = require("bcryptjs");

const hashPassword = (plainPassword, callback) => {
  bcrypt.hash(plainPassword, 10, (err, hash) => {
    callback(err, hash);
  });
};
const postData = reqBody => {
  const { name, email, password, type } = reqBody;
  hashPassword(password, (err, hash) => {
    console.log(hash);
    sql = {
      text:
        "INSERT INTO user_info(name,email,password,type) VALUES($1,$2,$3,$4);",
      values: [name, email, hash, type]
    };
    connection.query(sql.text, sql.values, (err, result) => {
      if (err) throw err;
    });
  });
};
module.exports = postData;
