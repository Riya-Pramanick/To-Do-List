const express = require("express");
const path = require("path");
const port = 9000;


// const db = require('./config/mongoose');

// const Contact = require("./models/contact");
const app = express();

app.set("view engine", 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static("assests"));


app.get('/', function(req, res) {
    // res.send('<h1>its running cool!</h1>')

    res.render('home'

    );

});

app.listen(port, function(err, data) {
    if (err) {
        console.log("error in running the server", err);
    }
    console.log("sucess", port);
})