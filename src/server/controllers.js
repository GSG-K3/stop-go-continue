const authentication = require("../models/database/queries/authentication");

const loginAuthentication = (err, res) => {
    let hashedPassword = res[0].password;
    bcrypt.compare(plainPassword, hashedPassword, (req, result) => {
       let token = jwt.sign({email:res[0].email },'fffff') ;
      response.cookie('email', token);
      
      if (result === true) {
        if (res[0].type === "student") response.send({ usertype: "student" });
        if (res[0].type === "cf") response.send({ usertype: "cf" });
      } else {
        response.send({ usertype: "wrong password" });
      }
    });
}

  module.exports = loginAuthentication;
