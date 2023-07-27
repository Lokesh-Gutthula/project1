const express = require("express");
const path = require("path");
const hbs = require("hbs");
const bcrypt = require("bcryptjs");
// var bodyparser = require("body-parser");
const port = process.env.PORT || 7000;

const mysql = require("mysql");


const con = mysql.createConnection({
	host: "localhost",
	user: "Lokesh",
	password: "Lokesh127",
	database: "restoran"
});

con.connect((err)=>{
	if (err) {
		console.log(err.stack);
	};
	console.log("Sql Connected");
})

const app = express();
// app.use(bodyparser.json());	// to convert data into json
// app.use(bodyparser.urlencoded({extended:true}));
app.use(express.json());	// parse JSON bodies (as sent by API Clients)
app.use(express.urlencoded({extended:true}));	// parse URL-encoded bodies (as sent by html forms)

const static_path = path.join(__dirname,"../static");
const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");


app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);
app.use(express.static(static_path));

app.use("/", require("../Routes/pages"));

app.post("/submitform",(req,res)=>{
// 		in form names should equal with variables in {}
	const {name, email, password} = req.body;
	con.query("select email from sign_up where email = ?",[email],async (err,result)=>{	// result can be in array
		if (err){
			console.log({success:false, message: err});
		}

		if (result.length > 0){
			return res.render("signup",{
				message: "This Email is Already in Use"
			});
		}
		let hashedPassword = await bcrypt.hash(password,9);

		// con.query("insert into sign_up(name, email, password) values(?,?,?)",[name,email,password],(err,result)=>{
		con.query("INSERT into sign_up set ?", {name:name, email:email, password:hashedPassword},(err,result)=>{
			if (err) throw err;
			else
				res.send({success:true, message: "Registered Successfully"});
		});
		// res.send("Submitted");
		res.redirect("/signin");
	})
});
	


app.listen(port,()=>{
	console.log("Server Started at ",port);
})
