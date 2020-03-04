const express = require("express");
const router = express.Router();
const path = require("path");
const jwt = require('jsonwebtoken');
const bodyParser = require("body-parser");
const postData = require("../models/database/queries/postData");
const postActivity = require("../models/database/queries/postactivity");
const getData = require("../models/database/queries/getData");
const authentication = require("../models/database/queries/authentication");
const bcrypt = require("bcryptjs");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "public", "home.html"));
});

router.post("/login", (req, response) => {
  let plainPassword = req.body.password;
  let reqbody = req.body;
 
  authentication(reqbody, (err, res) => {
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
  });
});

router.post("/register", (req, response) => {
  postData(req.body);
  response.redirect("/login.html");
});


router.post("/student", (req, response) => {
  postActivity(req.body);
  response.redirect("/student.html");

});
router.get("/cf", (req,response) =>{
    getData((err,res) => {
        response.send(res)
    })
})


module.exports = router;