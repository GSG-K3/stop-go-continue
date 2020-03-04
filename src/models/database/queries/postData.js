const connection = require('../db_connection');
const postData = (reqBody) => {
    const { name, email, password, type} = reqBody;
    sql = {
        text: "INSERT INTO user_info(name,email,password,type) VALUES($1,$2,$3,$4);",
        values: [name, email, password,type]
    }
    connection.query(sql.text,sql.values,(err,result)=>{
        if (err) throw err;
    });

}
module.exports=postData;