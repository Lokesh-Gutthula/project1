const express = require("express");
const mysql = require("mysql");
const dotenv = require("dotenv");
const hbs = require("hbs");
const path = require("path");

dotenv.config({path: './.env'});

const app = express();

const con = mysql.createConnection({
	host: process.env.HOST,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.DATABASE
});

const static_path = path.join(__dirname,"../static");
const view_path = path.join(__dirname,"../templates/views");
app.use(express.static(static_path));

app.set("view engine", "hbs");

con.connect((err)=>{
	if (err) throw err;
	console.log("Sql Connected");
})




app.listen(7000);