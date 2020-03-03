const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const router = require('./router');

app.use(express.static(path.join(__dirname, '..', '..', 'public')));

app.use(router);


app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log("This server is working");
});



