/************ PropUp - SERVER *************/
/* Serve webpages and manages endpoints.
/* Copyright 2019                         */

//import depencies
const  fs = require('fs');
const  path = require('path');
const  ascii = require('./assets/ascii')
const history = require('connect-history-api-fallback');
const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const cors = require("cors");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;

var today = new Date();

//clear console
console.log('\033[2J');

//display app title (propup © XXXX /hr)
console.log(ascii.title + today.getFullYear() + ascii.linebreak);

//application port
const PORT = process.env.PORT || 8080;

//create express app
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//serve the client dist
const staticFileMiddleware = express.static(path.join(__dirname, '../client/dist'));
app.use(staticFileMiddleware);
app.use(history({
  disableDotRule: true,
  verbose: true
}));
app.use(staticFileMiddleware);


app.listen(PORT, function() {
  console.log(`App running on port: ${PORT}`);
});
