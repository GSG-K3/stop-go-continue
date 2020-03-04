const express = require('express');
const router = express.Router();
const path = require('path');
const db = require('../models/database/db_build');
const bodyParser = require('body-parser');
const postData = require('../models/database/queries/postData');
const getData = require('../models/database/queries/getData');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.post('/register', (req, response) => {
    console.log(req.body);
    postData(req.body);
    response.redirect('/');
});
router.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'..','..','public','home.html'))
})


module.exports = router;