var mysql = require("mysql");
var express = require("express");
var router = express.Router();
var  bodyParser = require('body-parser');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodelogin",
});

con.connect(function (err) {
  if (err) {
    throw err;
  } else {
    console.log("you are connected");
  }
});
