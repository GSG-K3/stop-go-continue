const express = require("express");
const router = express.Router();
const path = require("path");
const db = require("../models/database/db_build");
const bodyParser = require("body-parser");
const postData = require("../models/database/queries/postData");
const postActivity = require("../models/database/queries/postactivity");
const getData = require("../models/database/queries/getData");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.post('/register', (req, response) => {
    postData(req.body);
    response.redirect('/');
});

router.post("/student", (req, response) => {
  postActivity( req.body);
  response.redirect("/student.html");
});

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "public", "home.html"));
});

 router.get("/cf", (req,response) =>{
     getData((err,res) => {
         response.send(res)
     })
 })

module.exports = router;
