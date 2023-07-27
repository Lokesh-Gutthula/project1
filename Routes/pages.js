const express = require("express");

const router = express.Router();

router.get("/",(req,res)=>{
	res.render("index");
})
router.get("/restoran",(req,res)=>{
	res.render("restoran")
})

router.get("/restoran/about",(req,res)=>{
	res.render("restoran/about")
})

router.get("/restoran/service",(req,res)=>{
	res.render("restoran/service")
})

router.get("/restoran/menu",(req,res)=>{
	res.render("restoran/menu")
})

router.get("/restoran/booking",(req,res)=>{
	res.render("restoran/booking")
})

router.get("/restoran/team",(req,res)=>{
	res.render("restoran/team")
})

router.get("/restoran/testimonial",(req,res)=>{
	res.render("restoran/testimonial")
})

router.get("/restoran/contact",(req,res)=>{
	res.render("restoran/contact")
})



router.get("/shopping",(req,res)=>{
	res.render("shopping")
})
router.get("/game",(req,res)=>{
	res.render("game")
})

router.get("/game/GamesList",(req,res)=>{
	res.render("game/GamesList")
})

router.get("/game/GameReview",(req,res)=>{
	res.render("game/GameReview")
})

/*
router.get("/home",(req,res)=>{
	res.render("")
});

router.get("/about",(req,res)=>{
	res.render("")
});

router.get("/service",(req,res)=>{
	res.render("")
});

router.get("/menu",(req,res)=>{
	res.render("")
})
*/

router.get("/signin",(req,res)=>{
	res.render("login/signin");
})

router.get("/signup",(req,res)=>{
	res.render("login/signup");
});



module.exports = router;