const express = require("express");
const router = express.Router();
const path = require("path");
const jwt = require('jsonwebtoken');
const bodyParser = require("body-parser");
const postData = require("../models/database/queries/postData");
const postActivity = require("../models/database/queries/postactivity");
const getData = require("../models/database/queries/getData");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "public", "home.html"));
});

router.post('/login',(req,res)=>{


console.log(req.body)

res.send("true");
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