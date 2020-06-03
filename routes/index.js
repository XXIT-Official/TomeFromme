const express = require("express");
const router = express.Router();
const Letter = require("../models/letter");
const mongoose = require('mongoose');

/* GET home page. */
router.get("/",  (req, res, next) => {
  res.render("index");
});

router.post("/chk",(req,res)=>{
    console.log(req.body.email);
    Letter.findOne({ email:req.body.email, ukey:req.body.key })
        .exec()
        .then(data => {
            if (data) {
                res.render("letter",{content:data});
            } else {
                res.render("keychk");
            }
        });
});


router.get("/loading", (req, res, next) => {
  res.render("loading");
});
module.exports = router;
