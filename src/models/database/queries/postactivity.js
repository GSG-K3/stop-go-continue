const connection = require("../db_connection");
const postActivity = reqBody => {
  sql = {
    text:
      " INSERT INTO stop_go_continue ( user_id,type, description ) VALUES ($1,$2,$3);",
    values: [reqBody.user_id, reqBody.activitytype, reqBody.description]
  };

  connection.query(sql.text, sql.values, (error, results) => {
    if (error) {
      throw error;
    }
  });
};
module.exports = postActivity;
