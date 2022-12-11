var express = require ('express');
var session = require ('express-session');
var cookie = require ('cookie-parser');
var path = require ('path');
var ejs= require ('ejs');
var multer = require('multer');
var async = require ('async');
var nodmailer = require ('nodemailer');
var crypto = require ('crypto');
var expressValidator = require ('express-validator');
var  sweetalert = require('sweetalert2');
var  bodyParser = require('body-parser');
const http = require('http');
const Server = require('socket.io');

var app = express();

app.set('view engine', 'ejs');
const server = http.createServer(app);
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookie());
const PORT = process.env.PORT||3001
server.listen(PORT,()=>console.log(`server running on port ${PORT}`))
